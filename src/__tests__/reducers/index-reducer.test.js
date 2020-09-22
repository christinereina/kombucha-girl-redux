import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kombuchaListReducer from '../../reducers/kombucha-list-reducer';


let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKombuchaList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of kombuchaListReducer matches root reducer', () => {
    expect(store.getState().masterKombuchaList).toEqual(kombuchaListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of kombuchaListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_KOMBUCHA',
      name: 'The Keanu',
      brand: 'Dr. Christine',
      price: '$8.99',
      flavor: 'Honey Peach',
      quanity: '100',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKombuchaList).toEqual(kombuchaListReducer(undefined, action));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});