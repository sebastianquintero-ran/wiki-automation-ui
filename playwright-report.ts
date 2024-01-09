import type {
    FullConfig,
    Reporter,
    Suite,
    TestCase,
    TestResult,
} from '@playwright/test/reporter';

class MyReporter implements Reporter {
    results: any = [];

    onBegin(config: FullConfig, suite: Suite) {
        console.log(`Starting the run with ${suite.allTests().length} tests`);
    }

    onTestBegin(test: TestCase, result: TestResult) {
        console.log(`Starting test ${test.title}`);
    }

    onTestEnd(test: TestCase, result: TestResult) {
        console.log(`Finished test ${test.title}: ${result.status}`);
        this.results.push({ test: test.title, result: result.status });
    }
}

export default MyReporter;
