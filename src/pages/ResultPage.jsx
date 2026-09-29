import { Navigate, useLocation,useNavigate, } from "react-router-dom"
import { ROUTES } from "../constants/const";
import { RESULT_COMMENT } from "../constants/comment";
import { PRODUCTS } from "../constants/products";
import { useEffect, useState } from "react";
import styles from "../css/ResultPage.module.css"


export default function ResultPage() {
  const [isLoading,setIsLoading] = useState(true);
  const [selectedProduct,setSelectedProduct] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=> {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout (timer);
  },[]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <img src="/carafe5.png" alt="抽出中" className={styles.loadingIcon}/>
        <p className={styles.comment}>あなたにぴったりの一杯を抽出中・・・</p>
      </div>
    );
  }


  if (!location.state) {
    return<Navigate to = {ROUTES.HOME} replace />;
  }

  const scores = location.state.finalScore;
  const pointList = Object.values ( scores ) ;
  const maxPoint = Math.max ( ...pointList ) ;

  const topRoasts = Object.keys ( scores ) . filter (( key ) => {
    return scores [ key ] === maxPoint ;
  })

  const commentKey = topRoasts.join("_");
  const finalComment = RESULT_COMMENT[commentKey];

  const recommendProducts = PRODUCTS.filter (( product ) => {
    return topRoasts.includes(product.type);
  })
  console.log(recommendProducts);

  return (
    <div className = {styles.resultContainer}>
      <h1>診断結果</h1>
      <div className={styles.commentBox}>
        <p className={styles.commentTitle}>{finalComment.title}</p>
        <p className={styles.commentText}>{finalComment.text}</p>
      </div>
      <h2>オススメのコーヒー</h2>
      <ul className={styles.productList}>
        {recommendProducts.map((product) => (
          <li key={product.name}
              className={styles.productCard}
              onClick={() => setSelectedProduct(product)}>
            <img src={product.image} alt="product.name" className={styles.productImage} />
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}円</p>
            
                <div className={styles.tagsContainer}>
              {product.tags.map((tag,index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}</div>
            </div>
              <span className={styles.clickHint}>詳細を見る</span>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedProduct(null)}>×</button>

            <h3>{selectedProduct.name}</h3>
            <img src={selectedProduct.image} alt="selectedProduct.name" className={styles.modalImage}/>
            <p className={styles.modalComment}>{selectedProduct.comment}</p>
            <p className={styles.modalPrice}>{selectedProduct.price}円</p>
            <button className={styles.cartButton} onClick={() => alert("カートに追加しました（デモ）")}>
              カートに入れる
            </button>
          </div>

        </div>
      )}

    </div>
  )

}


