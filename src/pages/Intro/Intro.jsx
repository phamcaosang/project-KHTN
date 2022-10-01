import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Intro.scss"

import imgSang from "../../images/avatar_Sang.png"
import imgThai from "../../images/avatar_Thai.png"
import imgHa from "../../images/avatar_Ha.png"
import sentiment_demo from "../../images/sentiment_demo.jpg"
import wordcloud_1 from "../../images/wordcloud_1.png"
import wordcloud_2 from "../../images/wordcloud_2.png"
import matrix_gbt from "../../images/matrix_gbt.png"
import matrix_lgt from "../../images/matrix_lgt.png"
import matrix_nb from "../../images/matrix_nb.png"
import matrix_svm from "../../images/matrix_svm.png"
import matrix_rnn from "../../images/matrix_rnn.png"

import cf_gbt from "../../images/cf_gbt.png"
import cf_lgt from "../../images/cf_lgt.png"
import cf_nb from "../../images/cf_nb.png"
import cf_svm from "../../images/cf_svm.png"
import cf_rnn from "../../images/cf_rnn.png"

import bert from "../../images/bert_base.jpg"


function Intro() {
  const navigate = useNavigate()
  return (
    <>
      <div className='return' onClick={()=>navigate("/")}>
        Return
      </div>
    <div className='Intro mt-5'>
        <h2 mt-5>Introduction</h2>
       <div className='introduction'>
          <p>TripAdvisor là trang web cung cấp dịch vụ tư vấn du lịch đáng tin cậy từ chính những khách du lịch thực sự. Đặc biệt, trang web có các các liên kết liền mạch với công cụ đặt phòng giúp cho người dùng dễ dàng chọn lựa và đặt phòng nhanh chóng, dễ dàng.</p>
          <img src="https://hotelcareers.vn/wp-content/uploads/2020/12/tripadvisor-ho-tro-dat-phong-dat-tour.jpg" style = {{width: "100%"}} alt="" />
          <p className='mt-3'>Các du khách truy cập trang web TripAdvisor để chia sẻ kinh nghiệm về những chuyến du lịch của mình, chia sẻ những trải nghiệm, đưa ra những nhận xét về giá vé hay giá phòng khách sạn, chất lượng dịch vụ của nhà hàng, khách sạn đã từng đến, cách đặt phòng,… Những chia sẻ này giúp ích rất nhiều cho những du khách đang có ý định du lịch đến điểm du lịch đó.</p>
       </div>
       <h2 mt-5>Mục tiêu/vấn đề</h2>
       <div className='problem'>
        <p>Xây dựng hệ thống Sentiment Analysis hỗ trợ khách sạn phân loại các phản hồi của khách hàng thành các nhóm: tích cực, tiêu cực, trung tính dựa trên dữ liệu dạng văn bản.</p>
        <div className='text-center'>
          <img src={sentiment_demo} alt="" />
        </div>
        <p className='mt-2'>Từ việc phân loại đánh giá đó, các khách sạn/ nhà nghỉ có thể hiểu được khách hàng rõ hơn, biết họ đánh giá về mình như thế nào để cải thiện hơn trong dịch vụ/ sản phẩm.</p>
       </div>
       <h2 mt-5 >Team</h2>
       <div className='team d-flex justify-content-between'>
          <div className='cardHuman'>
            <img src={imgSang} alt="" />
            <div className='name'>Pham Cao Sang</div>
          </div>
          <div className='cardHuman'>
            <img src={imgThai} alt="" />
            <div className='name'>Nguyen Van Thai</div>
          </div>
          <div className='cardHuman'>
            <img src={imgHa} alt="" />
            <div className='name'>Vu Thi Ha</div>
          </div>
       </div>
       <h2 mt-5>Những model sử dụng</h2>
       <div className='models'>
          <p>Với vấn đề được đặt ra nhóm chúng tôi đã thử nghiệm việc huấn luyện trên các model và thu được những kết quả khá khả quan.
          </p>
          <span>WordCloud</span>
          <div className='img-group'>
            <img src={wordcloud_1} alt="" />
            <img src={wordcloud_2} alt="" />
          </div>
          <p className='mt-3'>
          Vì đây là dữ liệu văn bản tiếng Việt nên cần thực hiện công việc chuẩn hóa văn bản trước tiên. Các cách xử lý dữ liệu dựa trên dữ liệu ban đầu, dữ liệu sau khi cân bằng... cho từng model cũng sẽ khác nhau (xử lý thô, chuẩn hoá unicode, tokenizer, stopword, undersampling, oversampling,...
          </p>
          <span>Các model sử dụng:</span>
          <ul className='mb-3'>
            <li>RNN/LSTM</li>
            <li>BERT/ PhoBERT</li>
            <li>PySpark NLP</li>
          </ul>
          <div className='groupModel mt-3'>
            <h5>RNN/LSTM</h5>
            <p>Việc ứng dụng RNN/LSTM đã đưa ra được nhiều kết quả không thể tin nổi trong nhiều lĩnh vực: nhận dạng giọng nói, mô hình hóa ngôn ngữ, dịch máy, mô tả ảnh,… </p>
            <span>Các bước thực hiện trong bài toán này bao gồm:</span>
            <ol>
              <li>Lựa chọn tham số, số lượng hidden layers,... phù hợp</li>
              <li>Xây dựng model RNN/LSTM dựa trên dữ liệu ban đầu và dữ liệu sau khi undersampling</li>
              <li>Đánh giá kết quả: Accuracy, precision, recall, F1,...</li>
              </ol>
            <div className='d-flex justify-content-between'>
              <img src={matrix_rnn} alt="" />
              <img src={cf_rnn} alt="" />
            </div>
          </div>
          <div className='groupModel mt-3'>
            <h5>Bert base</h5>
            <p>BERT là một khái niệm đơn giản nhưng lại mang lại những thành tựu to lớn trong lĩnh vực xử lý ngôn ngữ tự nhiên. BERT là viết tắt của Bidirectional Encoder Representations from Transformers được hiểu là một mô hình học sẵn hay còn gọi là pre-train model.</p>
            <span>Các bước thực hiện bao gồm:</span>
            <ol>
              <li>Tiền xử lý dữ liệu tương tự như model RNN/LSTM.</li>
              <li>Xây dựng model dựa trên BERT/PhoBERT trên dữ liệu full và dữ liệu undersampling. Có sử dung 1 số thư viện có sẵn như wonrax để làm trên cả Colab Pro và Kaggle</li>
            </ol>
            <div className='d-flex justify-content-between'>
              <img src={bert} alt="" 
              style={{width: "100%", height: "auto"}}/>
            </div>
          </div>
          <div className='groupModel mt-3'>
            <h5>PySpark ML</h5>
            <p>Spark ML có ưu điểm là có thể kết hợp nhiều thuật toán để tìm ra phương pháp tối ưu nhất.</p>
            <span>Các bước thực hiện bao gồm:</span>
            <ol>
              <li>Tiền xử lý dữ liệu tương tự như model RNN/LSTM</li>
              <li>Xây dựng các model với các thuật toán khác nhau trên dữ liệu full và dữ liệu undersampling</li>
              <li>So sánh kết quả giữa các model PySpark</li>
            </ol>
            <div className='mb-2'>Những kết quả của các model sau đây được huấn luyện trên tập dữ liệu được undersampling</div>
            <div className='d-flex justify-content-between mb-3'>
              <p className='text-center'>Gradient Boosted Tree</p>
              <img src={matrix_gbt} alt="" />
              <img src={cf_gbt} alt="" />
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <p className='text-center'>Logistic regression</p>
              <img src={matrix_lgt} alt="" />
              <img src={cf_lgt} alt="" />
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <p className='text-center'>Naive Bayes</p>
              <img src={matrix_nb} alt="" />
              <img src={cf_nb} alt="" />
            </div>
            <div className='d-flex justify-content-between'>
              <p className='text-center'>Support Vector Machine</p>
              <img src={matrix_svm} alt="" />
              <img src={cf_svm} alt="" />
            </div>
          </div>
       </div>
       <h2 mt-5>Tổng kết</h2>
       <div className='summary'>
       Sau khi so sánh các model (về thời gian, size model, kết quả dự đoán,...), nhóm đã quyết định lựa chọn model RNN/LSTM trên tệp dữ liệu đã cân bằng (undersampling) để tiến hành dự báo, dự đoán
       </div>
       <div className='thanks'>
          Thanks For Reading!
       </div>
    </div>
    </>
  )
}

export default Intro