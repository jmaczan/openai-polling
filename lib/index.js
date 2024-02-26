"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPollOptions = exports.poll = void 0;
function poll(openai, thread, run, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const mergedOptions = Object.assign(Object.assign({}, exports.defaultPollOptions), options);
        const maxAttempts = mergedOptions.maxAttempts;
        const interval = mergedOptions.intervalInMilliseconds;
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                const retrievedRun = yield openai.beta.threads.runs.retrieve(thread.id, run.id);
                mergedOptions.showLogs && console.log(retrievedRun.status);
                if (retrievedRun.status === 'completed' ||
                    retrievedRun.status === 'failed') {
                    mergedOptions.showLogs &&
                        console.log(`Run completed with status: ${retrievedRun.status}`);
                    return retrievedRun;
                }
                else {
                    mergedOptions.showLogs &&
                        console.log(`Attempt ${attempt}: Run status is ${retrievedRun.status}, polling again in ${interval / 1000} seconds...`);
                }
            }
            catch (error) {
                mergedOptions.showLogs &&
                    console.error('Error polling run status:', error);
                throw error;
            }
            yield new Promise(resolve => setTimeout(resolve, interval));
        }
        throw new Error('Max polling attempts reached');
    });
}
exports.poll = poll;
exports.defaultPollOptions = {
    maxAttempts: 60,
    intervalInMilliseconds: 4000,
    showLogs: false,
};
