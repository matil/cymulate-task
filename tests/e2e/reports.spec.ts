import {test} from '../login/login-fixture';
import * as tests from './reports-tests';

test('Reports - Validate', async ({loginPage, page}) => await tests.reportValidate(page));
