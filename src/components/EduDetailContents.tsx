import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";



const EduDetailContents = () => {

  const [main1, setMainBtn1] = useState(false);
  const [main2, setMainBtn2] = useState(false);
  const [main3, setMainBtn3] = useState(false);
  const [main4, setMainBtn4] = useState(false);
  
  // 메인 페이지에서 해더가 아닌 내용에서 클릭해서 넘어왔을 때 사용
  const { state } = useLocation();

  let changeNum = ""
  const saveState = (num : number) => {
    changeNum = String(num)
    localStorage.setItem('checkLocation',changeNum)
  }


  useEffect(() => {
    if (state === null) {
      saveState(1)
    } else if (localStorage.getItem('homeHistory') !== String(state)) {
      localStorage.setItem('homeHistory', String(state))
      localStorage.setItem('checkLocation', String(state))
    }
    
    if (localStorage.getItem('checkLocation') === "1" || localStorage.getItem('checkLocation') === "11") {
      mainBtnControl("IsMain1");
      subBtnControl('IsSub1');
    } else if (localStorage.getItem('checkLocation') === "12" ) {
      mainBtnControl("IsMain1");
      subBtnControl('IsSub2');
    } else if (localStorage.getItem('checkLocation') === "13" ) {
      mainBtnControl("IsMain1");
      subBtnControl('IsSub3');
    } else if (localStorage.getItem('checkLocation') === "14" ) {
      mainBtnControl("IsMain1");
      subBtnControl('IsSub4');
    } else if (localStorage.getItem('checkLocation') === "15" ) {
      mainBtnControl("IsMain1");
      subBtnControl('IsSub5');
    } else if (localStorage.getItem('checkLocation') === "16" ) {
      mainBtnControl("IsMain1");
      subBtnControl('IsSub6');
    } else if (localStorage.getItem('checkLocation') === "2") {
      mainBtnControl("IsMain2")
      subBtnControl('None')
    } else if (localStorage.getItem('checkLocation') === "3") {
      mainBtnControl("IsMain3")
      subBtnControl('None')
    } else if (localStorage.getItem('checkLocation') === "4") {
      mainBtnControl("IsMain4")
      subBtnControl('None')

      window.scrollTo(0, 0);
    }

  },[])

  const mainBtnControl = (btn: string) => {
    setMainBtn1(false);
    setMainBtn2(false);
    setMainBtn3(false);
    setMainBtn4(false);

    switch (btn) {
      case "IsMain1":
        setMainBtn1(true);
        break;
      case "IsMain2":
        setMainBtn2(true);
        break;
      case "IsMain3":
        setMainBtn3(true);
        break;
      case "IsMain4":
        setMainBtn4(true);
        break;
    }
  }


  let item = [{
    a1: [
      {
        img: 'snake',
        hash: '#모듈형 #다관절 제어 #생체모방',
        title: '뱀 로봇',
        link: "/snake"
      },
      {
        img: "spider",
        hash: "#자율탐색 #다족보행 #고정밀 제어",
        title: "거미 로봇",
        link: "/spider"

      },
      {
        img: "security",
        hash: "#레이더 #자율주행 #보안 솔루션",
        title: "경비 로봇",
        link: "/security"

      },
      {
        img: "logistics",
        hash: "#물류자동화 #로봇배송 #스마트 물류",
        title: "물류 로봇",
        link: "/logistics"

      },
      {
        img: "smallPuppy",
        hash: "#사족보행 #로봇 동역학 #인터랙티브",
        title: "작은 강아지 로봇",
        link: "/smallPuppy"

      },
    ],
    a2: [
      {
        img: 'hourGlass',
        hash: '#도트 매트릭스 #밸런스 센서 #코딩',
        title: 'LED 모래시계',
        link: "/hourGlass"

      },
      {
        img: "human",
        hash: "#인체모방 #모션제어 #연구개발",
        title: "인간형 로봇",
        link: "/human"

      },
      {
        img: "otto",
        hash: "#DIY #이족보행 #보행 알고리즘",
        title: "뚜벅이 로봇",
        link: "/otto"

      },
      {
        img: "securityDog",
        hash: "#스마트경비 #보안로봇 #AI보안",
        title: "경비 로봇 강아지",
        link: "/securityDog"

      },
    ],
    a3: [
      // {
      //   img: 'hourGlass',
      //   hash: '#도트 매트릭스 #밸런스 센서 #코딩',
      //   title: 'LED 모래시계',
      //   link: "/hourGlass"

      // },
    ],
    a4: [
      {
        img: "yolo",
        hash: "#객체인식 #실시간객체인식 #YOLO알고리즘",
        title: "YOLO",
        link: "/yolo"

      },
      {
        img: "deepLearning",
        hash: "#인공지능학습 #데이터과학 #AI딥러닝",
        title: "딥러닝",
        link: "/deepLearning"

      },
      {
        img: "reinforcementLearning",
        hash: "#지능형알고리즘 #머신러닝강화 #AI",
        title: "강화학습",
        link: "/reinforcementLearning"

      },
    ],
    a5: [
      {
        img: 'printer',
        hash: '#창작물 #3D모델링 #조형기술',
        title: '3D 프린터',
        link: "/printer"

      },
      {
        img: "plc",
        hash: "#제어시스템 #자동화 #컨트롤러",
        title: "PLC",
        link: "/plc"

      },
      {
        img: "kicad",
        hash: "#PCB디자인 #전자회로 #회로설계",
        title: "KiCad",
        link: "/kicad"

      },
    ],
    a6: [
      {
        img: "embedded",
        hash: "#마이크로컨트롤러 #스마트시스템",
        title: "임베디드 시스템",
        link: "/embedded"

      },
      {
        img: "ros2",
        hash: "#로봇개발 #프로그래밍 #로봇운영",
        title: "ROS2",
        link: "/ros2"
      },
    ],
    b: [
      {
        img: 'securityDog',
        hash: '#스마트경비 #보안로봇 #AI보안',
        title: '경비 로봇 강아지',
        link: "/securityDog"

      },
      {
        img: "security",
        hash: "#레이더 #자율주행 #보안 솔루션",
        title: "경비 로봇",
        link: "/security"

      },
      {
        img: "logistics",
        hash: "#물류자동화 #로봇배송 #스마트 물류",
        title: "물류 로봇",
        link: "/logistics"

      },
      {
        img: "manipulator",
        hash: "#6축 #정밀조작 #산업용로봇",
        title: "매니퓰레이터",
        link: "/manipulator"

      },
    ],
    c: [
      {
        img: "logistics",
        hash: "#물류자동화 #로봇배송 #스마트 물류",
        title: "물류 로봇",
        link: "/logistics"

      },
    ],
    d: [
      // {
      //   img: "manipulator",
      //   hash: "#6축 #정밀조작 #산업용로봇",
      //   title: "매니퓰레이터",
      //   link: "/manipulator"

      // },
      // {
      //   img: "kicad",
      //   hash: "#PCB디자인 #전자회로 #회로설계",
      //   title: "KiCad",
      //   link: "/kicad"


      // },
    ],
  }]



  const [sub1, setSubBtn1] = useState(false);
  const [sub2, setSubBtn2] = useState(false);
  const [sub3, setSubBtn3] = useState(false);
  const [sub4, setSubBtn4] = useState(false);
  const [sub5, setSubBtn5] = useState(false);
  const [sub6, setSubBtn6] = useState(false);


  const subBtnControl = (btn: string) => {
    setSubBtn1(false);
    setSubBtn2(false);
    setSubBtn3(false);
    setSubBtn4(false);
    setSubBtn5(false);
    setSubBtn6(false);

    switch (btn) {
      case "IsSub1":
        setSubBtn1(true);
        break;
      case "IsSub2":
        setSubBtn2(true);
        break;
      case "IsSub3":
        setSubBtn3(true);
        break;
      case "IsSub4":
        setSubBtn4(true);
        break;
      case "IsSub5":
        setSubBtn5(true);
        break;
      case "IsSub6":
        setSubBtn6(true);
        break;
      case "None":
        setSubBtn1(false);
        setSubBtn2(false);
        setSubBtn3(false);
        setSubBtn4(false);
        setSubBtn5(false);
        setSubBtn6(false);
    }
  }


  var contentsMap1_1 = item.map(function (nested) {
    return nested.a1.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap1_2 = item.map(function (nested) {
    return nested.a2.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  // var contentsMap1_3 = item.map(function (nested) {
  //   return nested.a3.map(function (a) {
  //     return (
  //       <button className="EduDetail-content-container">
  //         <Link to={a.link}>
  //           <img src={require('../images/detailContents/' + a.img + '.png')} />
  //           <p className="HashTag-text">{a.hash}</p>
  //           <p className="Title-text">{a.title}</p>
  //         </Link>
  //       </button>
  //     );
  //   });
  // });

  var contentsMap1_4 = item.map(function (nested) {
    return nested.a4.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap1_5 = item.map(function (nested) {
    return nested.a5.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap1_6 = item.map(function (nested) {
    return nested.a6.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap2 = item.map(function (nested) {
    return nested.b.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap3 = item.map(function (nested) {
    return nested.c.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  // var contentsMap4 = item.map(function (nested) {
  //   return nested.d.map(function (a) {
  //     return (
  //       <button className="EduDetail-content-container">
  //         <Link to={a.link}>
  //           <img src={require('../images/detailContents/' + a.img + '.png')} />
  //           <p className="HashTag-text">{a.hash}</p>
  //           <p className="TwoLineTitle">{a.title1}<br/>{a.title2}</p>
  //         </Link>
  //       </button>
  //     );
  //   });
  // });

  return (
    <>

      {/* ------------------메인 카테고리------------------  */}

      <div className="MainCategory-container" style={{marginBottom: main2 || main3 || main4 ? "3.272rem" : ""}}>
        <button
          className={(main1 ? "MainCategory-click" : "MainCategory-click-off")}
          type="button"
          onClick={() => { mainBtnControl('IsMain1'); subBtnControl('IsSub1'); saveState(11) }}
        >
          집합 교육
        </button>

        <button
          className={(main2 ? "MainCategory-click" : "MainCategory-click-off")}
          type="button"
          onClick={() => { mainBtnControl('IsMain2'); subBtnControl('None'); saveState(2) }}
        >
          방문 교육
        </button>

        <button
          className={(main3 ? "MainCategory-click" : "MainCategory-click-off")}
          type="button"
          onClick={() => { mainBtnControl('IsMain3'); subBtnControl('None'); saveState(3) }}
        >
          RODU 챌린지
        </button>

        <button
          className={(main4 ? "MainCategory-click" : "MainCategory-click-off")}
          type="button"
          onClick={() => { mainBtnControl('IsMain4'); subBtnControl('None'); saveState(4) }}
        >
          온라인 교육
        </button>
      </div>

      {/* ------------------서브 카테고리------------------  */}

      <div className="SubCategory">
        {main1 ? <div className="SubCategory-container">

          <button
            className={(sub1 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => {
              subBtnControl('IsSub1');
              saveState(11)
            }}
          >
            로봇 교육
          </button>

          <button
            className={(sub2 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => {
              subBtnControl('IsSub2');
              saveState(12)
            }}
          >
            소프트웨어 교육
          </button>

          <button
            className={(sub3 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => {subBtnControl('IsSub3'); saveState(13)}} 
          >
            임베디드 교육
          </button>

          <button
            className={(sub4 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => {subBtnControl('IsSub4'); saveState(14)}}
          >
            AI 교육
          </button>

          <button
            className={(sub5 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => {subBtnControl('IsSub5'); saveState(15)}}
          >
            장비 교육
          </button>

          <button
            className={(sub6 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => {subBtnControl('IsSub6'); saveState(16)}}
          >
            OS 교육
          </button>
        </div>
          : <></>}

      </div>

      <div className={(sub1 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap1_1}
      </div>
      <div className={(sub2 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap1_2}
      </div>
      <div className={(sub3 ? "EduDetail-click" : "EduDetail-click-off")}>
        {/* {contentsMap1_3} */}
      </div>
      <div className={(sub4 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap1_4}
      </div>
      <div className={(sub5 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap1_5}
      </div>
      <div className={(sub6 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap1_6}
      </div>
      <div className={(main2 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap2}
      </div>
      <div className={(main3 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap3}
      </div>
      <div className={(main4 ? "EduDetail-click" : "EduDetail-click-off")}>
        {/* {contentsMap4} */}
      </div>
    </>
  );

};

export default EduDetailContents;
