import url from 'url';
import async from 'async';
import request from 'request';
import PDFParser from 'pdf2json/pdfparser';

const getText = (document, textPosition) => 
    decodeURIComponent(document.data.Pages[0].Texts[textPosition].R[0].T)
        .replace(/(\“|\”)/g, '"')
        .replace(/(\‘|\’)/g, '\'');

async.waterfall([
    (cb) => {
        console.log('Retrieving kernel subsystem...');

        request.get('http://stylelabs.com/hack.pdf', { encoding: null }, cb);
    },
    (res, body, cb) => {
        console.log('Parsing internal datapoints...');

        const pdfParser = new PDFParser()
        pdfParser.on('pdfParser_dataReady', (document) => cb(null, document));
        pdfParser.on('pdfParser_dataError', (error) => cb(error));
        pdfParser.parseBuffer(body);
    },
    (document, cb) => {
        const host = getText(document, 1)
            .replace(/(http|\/|\:|\"|\"|\+|\s)/g, '');
        const decodedHost = new Buffer(host, 'base64').toString('ascii');

        let path = '';
        for (let textPosition = 2; textPosition < 28; textPosition++) {
            path += getText(document, textPosition);
        }

        console.log('Access denied! Master code is encrypted:');
        console.log(' >', `"http://${host}/" + ${path}`);

        console.log('Mainframe access breached. Master code:');
        console.log(' >', `http://${decodedHost}/${eval(path)}`);
    }
  ], function (err) {
    if (err) {
      console.log('Unable to decrypt mainframe:', err);
    }
  });