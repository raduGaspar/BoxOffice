import React from 'react'

const Loading = (props) => (
  <div className='spinner'>
    <div className='bounce1' />
    <div className='bounce2' />
    <div className='bounce3' />

    <style jsx>{`
      .spinner {
        margin: 0 auto;
        width: 70px;
        text-align: center;
      }

      .spinner > div {
        width: 14px;
        height: 14px;
        background-color: #fff;

        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      }

      .spinner .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
      }

      .spinner .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
      }

      @-webkit-keyframes sk-bouncedelay {
        0%, 80%, 100% { -webkit-transform: scale(0) }
        40% { -webkit-transform: scale(1.0) }
      }

      @keyframes sk-bouncedelay {
        0%, 80%, 100% {
          -webkit-transform: scale(0);
          transform: scale(0);
        } 40% {
          -webkit-transform: scale(1.0);
          transform: scale(1.0);
        }
      }
    `}</style>
  </div>
)

Loading.defaultProps = {
  color: '#fff'
}

export default Loading
