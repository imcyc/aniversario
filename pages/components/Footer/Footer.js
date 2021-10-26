import Image from 'next/image';

export default function Footer(){
  return(
    <div className="Footer">
        <img src="/logo.svg" alt="" title="" style={{'width':'8em'}} />
        <h2><b>Instituto Mexicano del Cemento y del Concreto A.C.</b><br/>Av. Insurgentes Sur # 1846 Col. Florida, C.P. 01030, México, CDMX. (55) 5322 5740 imcyc@imcyc.com</h2>
        <style jsx>{`
          .Footer {
            width: 100%;
            text-align: center;
          }
          .Footer h2 {
            font-weight: 100;
            font-size: 0.7em;
            padding: 10px;
            color: #ffffff;
          }
        `}</style>
    </div>
  )
}