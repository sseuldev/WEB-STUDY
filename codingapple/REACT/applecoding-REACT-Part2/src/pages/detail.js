import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail(props) {
  useEffect(() => {
    let a = setTimeout(() => {
      setalert(false);
    }, 2000);
    return () => {
      clearTimeout(a)
    }
  }, []);

  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  let [alert, setalert] = useState(true);

  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning">2초 이내 구매 시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (찾은상품.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
