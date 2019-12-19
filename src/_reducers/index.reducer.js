import { combineReducers } from 'redux';
import { users } from './user.reducer';
import { products } from './product.reducer';
import { modal } from './modal.reducer';

const rootReducer = combineReducers({
  users,
  products,
  modal
});

export default rootReducer;
