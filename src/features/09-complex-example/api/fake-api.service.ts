class MyHttpError extends Error {

  ;

  constructor(msg: string, private statusCode: number) {
    super(msg);
  }
}

function resolveWithDelay(value: any, ms: number) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value);
    }, ms);
  });
}

function rejectWithDelay(error: Error, ms: number) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(error);
    }, ms);
  });
}

const delayInMs = 1200;

export const fakeApiService = {

  successfulRequest(url: string, data: any) {
    console.log(`--- REQUEST... ${url} `);
    return resolveWithDelay({ url, data, status: 'SUCCESS' }, delayInMs)
      .then(function (data) {
        console.log(`\t\tSUCCESS Resp ${url}`, data);
        return data;
      });
  },

  failedRequest(url: string, errorMsg = 'Some API error') {
    console.log(`--- REQUEST... ${url} `);
    return rejectWithDelay(new MyHttpError(errorMsg, 503), delayInMs)
      .catch(function (error) {
        console.log(`\t\tERROR Resp ${url}`, error.message);
        throw error;
      });
  },

  retryFailedRequest(url: string, count = Number.POSITIVE_INFINITY): Promise<any> {
    return this.failedRequest(url)
      .catch((error) => {
        if (count > 0) {
          console.log('Retry...');
          return this.retryFailedRequest(url, count - 1);
        } else {
          throw error;
        }
      });
  }
};
