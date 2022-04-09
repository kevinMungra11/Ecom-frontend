import React,{useEffect,useState} from 'react'
import Base from '../core/Base';
import Card from '../core/Card';
import { getProduct } from '../core/helper/coreapicalls';

const UserDashBoard = () => {

  const [products, setProducts] = useState([]);

  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProduct()
    .then((data) => {
      if(data.error){
        setError(data.error);
      }
      else{
        setProducts(data);
      }
    })
  }

  useEffect(() => {
    loadAllProduct();
  }, [])


  return (
      <Base titel='T-shirts' description=''>
          <div className="row text-center">
              <div className="row">
                  {products.map((product,index) => {
                    return (
                      <div key={index} className="col-4 mb-4">
                        <Card product={product} />
                      </div>
                    )
                  })}
              </div>
        </div>
      </Base>
  )
}

export default UserDashBoard;