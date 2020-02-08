This project accompanies a question regarding Nodejs Streams posted on stackoverflow.

**Purpose**

Read a random text file using the `readline` core module using a readstream. To compensate for the lack of an output stream and also given that `process.stdout` cannot be closed, I've created a Writable stream that performs no operation.

I am waiting for the write stream to finish before printing the state out.

I either see that the state is empty or that there is no output printed at all.


**How to run the project**

```
yarn start
```
