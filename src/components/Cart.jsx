import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
function Cart() {
  const data = useSelector((each) => each.cart.items);
  console.log(data);
  return <div>asd</div>;
}

export default Cart;
