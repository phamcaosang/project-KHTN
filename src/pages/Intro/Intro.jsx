import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Intro.scss"

import imgSang from "../../images/avatar_Sang.png"
import imgThai from "../../images/avatar_Thai.png"
import imgHa from "../../images/avatar_Ha.png"
import sentiment_demo from "../../images/sentiment_demo.jpg"

function Intro() {
  const navigate = useNavigate()
  return (
    <>
      <div className='return' onClick={()=>navigate("/")}>
        Return
      </div>
    <div className='Intro mt-5'>
        <h2>Introduction</h2>
       <div className='introduction'>
          <p>TripAdvisor là trang web cung cấp dịch vụ tư vấn du lịch đáng tin cậy từ chính những khách du lịch thực sự. Đặc biệt, trang web có các các liên kết liền mạch với công cụ đặt phòng giúp cho người dùng dễ dàng chọn lựa và đặt phòng nhanh chóng, dễ dàng.</p>
          <img src="https://hotelcareers.vn/wp-content/uploads/2020/12/tripadvisor-ho-tro-dat-phong-dat-tour.jpg" style = {{width: "100%"}} alt="" />
          <p className='mt-3'>Các du khách truy cập trang web TripAdvisor để chia sẻ kinh nghiệm về những chuyến du lịch của mình, chia sẻ những trải nghiệm, đưa ra những nhận xét về giá vé hay giá phòng khách sạn, chất lượng dịch vụ của nhà hàng, khách sạn đã từng đến, cách đặt phòng,… Những chia sẻ này giúp ích rất nhiều cho những du khách đang có ý định du lịch đến điểm du lịch đó.</p>
       </div>
       <h2>Mục tiêu/vấn đề</h2>
       <div className='problem'>
        <p>Xây dựng hệ thống Sentiment Analysis hỗ trợ khách sạn phân loại các phản hồi của khách hàng thành các nhóm: tích cực, tiêu cực, trung tính dựa trên dữ liệu dạng văn bản.</p>
        <div className='text-center'>
          <img src={sentiment_demo} alt="" />
        </div>
        <p className='mt-2'>Từ việc phân loại đánh giá đó, các khách sạn/ nhà nghỉ có thể hiểu được khách hàng rõ hơn, biết họ đánh giá về mình như thế nào để cải thiện hơn trong dịch vụ/ sản phẩm.</p>
       </div>
       <h2>Team</h2>
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
       <h2>Những model sử dụng</h2>
       <div className='models'>
          <p>Với vấn đề được đặt ra nhóm chúng tôi đã thử nghiệm việc huấn luyện trên các model khác nhau như các thuật toán Machine Learning trên Pyspark, RNN/LSTM, Bert/base và thu được những kết quả khá khả quan.
          </p>
          <div className='groupModel'>
            <h5>RNN/LSTM</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quis recusandae voluptates vel veritatis perspiciatis qui labore voluptas error laboriosam autem suscipit temporibu.</p>
            <div className='d-flex justify-content-between'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
          </div>
          <div className='groupModel'>
            <h5>Bert base</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quis recusandae voluptates vel veritatis perspiciatis qui labore voluptas error laboriosam autem suscipit temporibu.</p>
            <div className='d-flex justify-content-between'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
          </div>
          <div className='groupModel'>
            <h5>Pyspark</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quis recusandae voluptates vel veritatis perspiciatis qui labore voluptas error laboriosam autem suscipit temporibu.</p>
            <div className='d-flex justify-content-between mb-3'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
            <div className='d-flex justify-content-between'>
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
              <img src="https://thumbs.dreamstime.com/b/result-red-rubber-stamp-over-white-background-88000702.jpg" alt="" />
            </div>
          </div>
       </div>
       <div className='thanks'>
          Thanks For Reading!
       </div>
    </div>
    </>
  )
}

export default Intro