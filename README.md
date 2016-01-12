# STYLELABS challenge decoder

Small Node.js application that will decode the STYLELABS challenge published here [http://stylelabs.com/hack.pdf](http://stylelabs.com/hack.pdf).

```
"http://Yml0Lmx5/" + 1 + ([]+!!-[])[(1<<1)+1] + (1<<1) + (("".constructor)+'')[(1<<4)-(1<<1)] + 'zK' + (([][+[]]+{})[1<<1])
```

This tool will:

 1. Download the PDF file from stylelabs.com
 2. Parse the challenge from that file
 3. Decode the challenge

Finally you can follow that URL and apply for a job with these cool Azure guys located in Groot-Bijgaarden! And if you do, try to be original and at least port this piece of code to a different language or something :)

## Usage

 1. Install Node.js 5.4 or higher (this will speed up Babel): https://nodejs.org/en/download/ (on OSX you could use `use nvm 5`)
 2. Run `npm install`
 3. Run `node index`

The output will be:

```
C:\Users\sandrino\Documents\GitHub\stylelabs-challenge-decoder>node index
Retrieving kernel subsystem...
Parsing internal datapoints...
Access denied! Master code is encrypted:
 > "http://Yml0Lmx5/" + 1 + ([]+!!-[])[(1<<1)+1] + (1<<1) + (("".constructor)+'')[(1<<4)-(1<<1)] + 'zK' + (([][+[]]+{})[1<<1])
Mainframe access breached. Master code:
 > http://THE_DECODED_URL
```