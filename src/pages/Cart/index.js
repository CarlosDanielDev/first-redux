import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { connect } from 'react-redux';
import { Container, ProductTable, Total } from './styles';

function Cart({ cart }) {
  console.log(cart);
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              {/* 1st */}
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              {/* 2nd */}
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormated}</span>
              </td>
              {/* 3rd */}
              <td>
                <div>
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#04d361" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#04d361" />
                  </button>
                </div>
              </td>
              {/* 4th */}
              <td>
                <strong>R$258,80</strong>
              </td>
              {/* 5th */}
              <td>
                <button type="button">
                  <MdDelete size={20} color="#04d361" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,78</strong>
        </Total>
      </footer>
    </Container>
  );
}
const mapStateToProps = state => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(Cart);
