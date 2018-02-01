import expect from 'expect';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import configureMockStore from 'redux-mock-store';
import mockAuthCheck from '../__mocks__/mockAuthCheck';
import mockLocalStorage from '../__mocks__/mockLocalStorage';
import mockItems from '../__mocks__/mockItems';
import {
  setCurrentUser,
  signInUser,
  userSignupRequest,
} from '../../src/actions/authAction';
import { SET_CURRENT_USER } from '../../src/actions/authAction';

let store;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const Materialize = {
  toast: (error, time, color) => {}
}
jest.mock('../../src/utils/Alert');
jest.mock('../../src/utils/setAuthToken');
jest.mock('jwt-decode');
//jest.mock('Materialize');


describe('>>>A C T I O N --- userActions', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });
  afterEach(() => moxios.uninstall());

  // Sign up User Action
  describe('User sign up action', () => {
    it('should not create a SIGN_UP action type due to an error response', async (done) => {
      moxios.stubRequest('/api/v1/user/signup', {
        status: 400,
        response: {
          response: {
            data: {
              token: 'gu8sy8gs8s'
            }
          }
        }
      });
      await store.dispatch(userSignupRequest(mockItems.user))
        .then(() => {
          const actions = store.getActions();
          expect(actions).toEqual([]);
          expect(actions.type).toEqual(undefined);
          done();
        });
    });

    it('should create a SIGN_UP action type', async (done) => {
      moxios.stubRequest('/api/v1/user/signup', {
        status: 201,
        response: {
          status: 'success',
          token: 'gu8sy8gs8s'
        }
      });
      await store.dispatch(userSignupRequest(mockItems.user))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toEqual(SET_CURRENT_USER);
          done();
        });
    });

    // it('should dispatch an AUTH_ERROR action', async (done) => {
    //   moxios.stubRequest('/api/v1/user/signup', {
    //     status: 401,
    //     response: {
    //       message: 'Username must start with a letter and have no spaces'
    //     }
    //   });
    //   await store.dispatch(userSignupRequest(mockItems.incorrectUser))
    //     .then(() => {
    //       const actions = store.getActions();
    //       expect(actions).toEqual([]);
    //       expect(actions.type).toEqual(undefined);
    //       done();
    //     });
    // });
  });

  // describe('User sign in action', () => {
  //   it('should create a AUTH_USER action', async (done) => {
  //     moxios.stubRequest('/api/v1/user/signin', {
  //       status: 200,
  //       response: {
  //         message: 'Authentication & Login successful',
  //         user: mockItems.userSignin
  //       }
  //     });
  //     mockAuthCheck();

  //     const expectedActions = [
  //       { type: 'AUTH_USER' }, {
  //         payload: {
  //           id: 'USER_SIGNEDIN',
  //           message: 'Welcome Onboard!',
  //           timeout: 5000,
  //           title: 'Success',
  //           type: 'success'
  //         },
  //         type: '@ReduxToastr/toastr/ADD'
  //       }
  //     ];

  //     await store.dispatch(loginUser(mockItems.userSignin))
  //       .then(() => {
  //         const actions = store.getActions();
  //         expect(actions).toEqual(expectedActions);
  //         done();
  //       });
  //   });

  //   // it('should dispatch an AUTH_ERROR action', async (done) => {
  //   //   moxios.stubRequest('/api/v1/user/signin', {
  //   //     status: 401,
  //   //     response: {
  //   //       message: 'Authentication failed!',
  //   //     }
  //   //   });

  //   //   const expectedAction = [{
  //   //     payload: { message: 'Authentication failed!' },
  //   //     type: 'AUTH_ERROR'
  //   //   },
  //   //   { payload: { error: '', message: '' }, type: 'AUTH_ERROR' }];

  //   //   await store.dispatch(loginUser(mockItems.invalidPassword))
  //   //     .then(() => {
  //   //       jest.runAllTimers();
  //   //       const actions = store.getActions();
  //   //       expect(actions).toEqual(expectedAction);
  //   //       done();
  //   //     });
  //   // });
  // });
});
