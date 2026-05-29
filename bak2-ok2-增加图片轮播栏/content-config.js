// 页面文字内容集中维护在这里；修改对应字段后刷新 index.html 即可生效。
window.teacherHomeConfig = {
  page: {
    title: "徐彦彦 | 武汉大学测绘遥感信息工程全国重点实验室",
    description: "徐彦彦教授个人主页，研究方向包括云计算安全与大数据隐私保护、智能网络通信、空间信息实时传输。"
  },
  nav: [
    { label: "研究方向", href: "#research" },
    { label: "课题组风采", href: "#gallery" },
    { label: "科研项目", href: "#projects" },
    { label: "论文成果", href: "#publications" },
    { label: "学生培养", href: "#students" },
    { label: "联系", href: "#contact" }
  ],
  hero: {
    photo: "https://liesmars.whu.edu.cn/__local/5/F7/F6/DE65023D3F4FA8A63C97186CFF2_E2D739A2_A7D9.jpg?e=.jpg",
    photoAlt: "徐彦彦教授照片",
    eyebrow: "Professor / Doctoral Supervisor",
    name: "徐彦彦",
    title: "博士，教授，博士生导师",
    affiliation: ["武汉大学测绘遥感信息工程全国重点实验室", "3S 集成与网络通信研究室副主任"],
    tags: ["云计算安全", "大数据隐私保护", "智能网络通信", "空间信息实时传输"],
    intro: "主要从事云计算安全与大数据隐私保护、智能网络通信、空间信息实时传输等方向研究。主持国家自然科学基金、国家重点研发计划子课题、国家自然科学基金委重大研究计划子课题等多项课题，公开发表学术论文 70 余篇，出版学术专著 1 部，授权国家发明专利多项。",
    actions: [
      { label: "邮件联系", href: "mailto:xuyy@whu.edu.cn", style: "primary-btn" }
    ]
  },
  profile: {
    id: "profile",
    eyebrow: "About",
    title: "个人简介",
    paragraphs: [
      "徐彦彦，女，博士，教授，博士生导师，武汉大学测绘遥感信息工程全国重点实验室 3S 集成与网络通信研究室副主任，中国地理信息安全技术工作委员会副主任委员，中国光谷 3551 创新人才。主持国家自然科学基金三项、国家重点研发计划子课题三项、国家自然科学基金委重大研究计划子课题一项、国家 973 计划子课题一项，主持或参与省部级纵向及横向项目二十余项。"
    ],
    badges: ["中国计算机学会会员", "ACM 会员", "中国人工智能学会智能信息网络专委会会员"]
  },
  research: {
    id: "research",
    eyebrow: "Research",
    title: "研究方向",
    items: [
      {
        title: "云计算安全与大数据隐私保护",
        description: "面向云环境、边缘计算和大规模数据服务，研究安全检索、隐私保护、内容保护与可信访问机制。",
        tags: ["Cloud Security", "Privacy Preserving", "Secure Retrieval"]
      },
      {
        title: "空间信息实时传输",
        description: "围绕遥感大数据、应急环境和天基信息网络，研究高效、可靠、安全的空间信息传输与分发技术。",
        tags: ["Remote Sensing Data", "Real-time Transmission", "Emergency Response"]
      },
      {
        title: "智能网络通信",
        description: "研究网络流量预测、智能路由、网络分区与约束路由方法，服务复杂网络中的通信优化与资源调度。",
        tags: ["Deep Learning", "Routing", "Network Service"]
      },
      {
        title: "遥感影像内容安全",
        description: "面向遥感影像在云环境与传输链路中的检索、加密、水印和版权追溯问题，构建内容级安全保护方法。",
        tags: ["Image Retrieval", "Watermarking", "Content Protection"]
      }
    ]
  },
  gallery: {
    id: "gallery",
    eyebrow: "Gallery",
    title: "课题组风采",
    // 添加图片时，把图片放入 images/ 文件夹，然后在 images 数组中新增一项即可。
    images: [
      {
        src: "https://img0.baidu.com/it/u=3838012428,171475712&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=360",
        alt: "课题组风采图片",
        caption: "课题组风采"
      },
      {
        src: "https://img0.baidu.com/it/u=3679668487,4132113126&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
        alt: "课题组风采图片",
        caption: "课题组风采"
      },
      {
        src: "https://img1.baidu.com/it/u=56951774,2011408089&fm=253&fmt=auto&app=138&f=JPEG?w=762&h=500",
        alt: "课题组风采图片",
        caption: "课题组风采"
      },
    ]
  },
  projects: {
    id: "projects",
    eyebrow: "Grants",
    title: "主要科研项目",
    items: [
      "国家自然科学基金面上项目，云计算环境下室内定位服务隐私保护研究（No. 42271431），2023.1-2026.12，主持",
      "国家重点研发计划，复杂应急环境多模态遥感大数据实时传输平台（No. 2022YFB3903404），2022.11-2026.11，子课题主持",
      "国家重点研发计划，众包地图数据安全保护技术（No. 2021YFB2501103），2021.12-2024.11，子课题主持",
      "国家自然科学基金委重大研究计划，天基信息网络在轨处理与实时传输综合集成演示验证（No. 91738302），2017.7-2022.9，子课题主持",
      "国家重点研发计划，国土资源与生态环境安全应急响应实时传输技术（No. 2017YFB0504202），2017.7-2021.7，子课题主持",
      "中央高校基本科研业务费专项资金项目，智能交通服务中的用户数据隐私保护研究主持（No. 2042019kf0227），2019.6-2021.6，主持",
      "国家自然科学基金面上项目，面向云计算环境的海量遥感影像安全检索方法研究（No. 41571426），2016.1-2019.12，主持",
      "武汉市应用基础研究计划项目，云计算环境下智能移动终端身份认证方法研究（No. 2017010201010114），2017.7-2019.7，主持",
      "江苏省网络监控工程中心开放基金，加密域图像检索方法研究，2015.9-2017.9，主持",
      "国家重点实验室自主研究项目，基于四元数的海量遥感影像安全分发与安全检索方法研究，2016.7-2017.7，主持",
      "国家 973 计划项目，网络可视媒体质量评价与安全分发（No. 2011CB302204-5），2011.1-2015.12，子课题主持",
      "国家自然科学基金青年基金项目，结合选择性内容加密与数字指纹的遥感影像内容安全保护（No. 41101416），2012.1-2014.12，主持",
      "航天恒星通信基金，基于内容的卫星网络多级安全保护方法研究，2012.12-2013.12，主持",
      "湖北省自然科学基金，结合加密与数字指纹的遥感影像内容安全保护方法研究，2011.6-2012.6，主持",
      "国家重点实验室自主研究项目，遥感影像内容安全保护方法研究，2011.7-2012.7，主持",
      "国家自然科学基金，云环境下遥感影像内容安全保护方法研究，2013.1-2016.12，主要参与",
      "高等学校博士点专项科研基金，遥感影像交换密码水印技术研究，2011.1-2013.12，主要参与",
      "国家自然科学基金，遥感影像多级加密算法研究，2008.1-2011.12，参与",
      "国家 973 计划项目子课题，基于认知的可视媒体加密与安全传输，2007.1-2010.12，主要参与",
      "国际合作项目（与美国 Vbridge Microsystem.Inc 合作），车载硬盘录像机和 IPCAM 管理软件项目，2007.5-2007.11，主要参与",
      "国家科技部、武汉市科技创新基金，视频信源加密安全视频会议系统，2005.11-2007.11，主要参与",
      "湖北省科技攻关计划，智能多媒体网络视频会议系统，2004.12-2006.10，主要参与",
      "武汉市电子发展基金项目，信源加密视频会议系统研制与产业化，2004.9-2006.8，主要参与",
      "湖北省科技攻关计划，智能多媒体网络视频会议系统，2004.1-2006.12，主要参与",
      "武汉市信息产业专项资金项目，信源加密安全视频会议系统研制与产业化，2004.1-2005.12，主要参与",
      "武汉市科技攻关计划项目，基于信源特征的标准压缩编码图像视频信号加密技术及其在视频会议系统中的应用研究，2003.3-2005.3，主要参与",
      "武汉大学产业化合作项目，新一代网络视频会议系统，2002.11-2004.12，主要参与"
    ]
  },
  publications: {
    id: "publications",
    eyebrow: "Publications",
    title: "代表性论文",
    items: [
      "Yuejing Yan, Yanyan Xu, Zhiheng Wang, etc. Privacy-preserving Multi-source Image Retrieval in Edge Computing. <em>IEEE Transactions on Service Computing</em>, DOI 10.1109/TSC.2022.3224511 [SCI]（中科院一区 Top）",
      "Zheheng Rao, Yanyan Xu, Shaoming Pan, etc. Cellular Traffic Prediction: A Deep Learning Method Considering Dynamic Nonlocal Spatial Correlation, Self-Attention, and Correlation of Spatiotemporal Feature Fusion. <em>IEEE Transactions on Network and Service Management</em>. 2023, 20(1): 426-440 [SCI]（中科院二区）",
      "Yue Ouyang, Yanyan Xu, Yangsu Mao, etc. Blockchain-Assisted Verifiable and Secure Remote Sensing Image Retrieval in Cloud Environment. <em>IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing</em>, 2023, Vol. 16: 1378-1389 [SCI]（JCR Q1）",
      "Wang Z, Xu Y, Yan Y, et al. Privacy-preserving indoor localization based on inner product encryption in a cloud environment. <em>Knowledge based Systems</em>, 2022, Vol 239, 108005 [SCI]（中科院一区 Top）",
      "Yuejing Yan, Yanyan Xu, Yiran Zhang, Zhiheng Wang. Zheheng Rao. Privacy-preserving content-based image retrieval in edge environment, <em>Cluster Computing</em>, 2021, 25(1):363-381. [SCI]",
      "Zheheng Rao, Yanyan Xu*, Shaoming Pan. A deep learning-based constrained intelligent routing method, <em>Peer-to-Peer Networking and Applications</em>, 2021, Vol.14, 2224-2235 [SCI]（JCR Q2）",
      "徐彦彦；张逸然；闫悦菁；王志恒，云环境下基于秘密共享的图像安全检索方案，<em>华中科技大学学报（自然科学版）</em>，2021, 49(6): 31-36 [EI]",
      "Zheheng Rao, Yanyan Xu*, Shaoming Pan. An intelligent routing method based on network partition, <em>Computer Communications</em>, 2020, Vol.160: 25-33. [SCI]（JCR Q1）",
      "Wang T, Zheng Z, Bashir A K, Jolfaei A, and Xu Y. FinPrivacy: A Privacy-Preserving Mechanism for Fingerprint Identification. <em>ACM Transactions on Internet Technology</em>, 2021, Vol. 56: 1-15, [SCI]（JCR Q1）",
      "Yanyan Xu; Xiao Zhao; Jiaying Gong. A Large-Scale Secure Image Retrieval Method in Cloud Environment, <em>IEEE Access</em>, 2019, Vol. 7, pp160082-160090 [SCI]",
      "Xiao Zhao; Yanyan Xu, Remote sensing image retrieval method based on improved fast search and find of density peaks-bag of visual words model, <em>Journal of Applied Remote Sensing</em>, 2019, 13(4): 046511-1-046511-13 [SCI]",
      "徐彦彦，赵啸，李子君. 一种基于四元数变换的彩色遥感影像检索方法[J]. <em>武汉大学学报（信息科学版）</em>, 2019, 44(11): 1633-1640 [EI]",
      "Jiaying Gong; Yanyan Xu; Xiao Zhao, A Privacy-preserving image retrieval method based on improved BoVW model in cloud environment, <em>IETE Technical Review</em>, 2018, 35(S1):76-84 [SCI]",
      "Yanyan Xu, Jiaying Gong, Lizhi Xiong, Zhengquan Xu, Jinwei Wang, Yun-qing Shi. A privacy-preserving content-based image retrieval method in cloud environment. <em>Journal of Visual Communication and Image Representation</em>. 2017, Vol. 43: 164-172 [SCI]（JCR Q2）",
      "Lizhi Xiong, Zhengquan Xu, Yanyan Xu. A multiple watermarking scheme based on orthogonal decomposition. <em>Multimedia Tools and Applications</em> [J]. 2016, 75(10):5377-5395 [SCI]（JCR Q2）",
      "Feng Chunhui, Xu Zhengquan, Jia Shan, Xu Yanyan. Motion-Adaptive Frame Deletion Detection for Digital Video Forensics[J]. <em>IEEE Transactions on Circuits & Systems for Video Technology</em>, 2016, PP(99):1-1. [SCI]（中科院 1 区 Top）",
      "Y. Zhong, X. Wang, L. Zhao, R. Feng, L. Zhang, and Y. Xu. Blind spectral unmixing based on sparse component analysis for hyperspectral remote sensing imagery. <em>ISPRS Journal of Photogrammetry and Remote Sensing</em>, 2016, vol. 119, pp. 49-63 [SCI]（中科院 1 区 Top）",
      "Han Wei, Yanyan Xu, Gong Jiaying. A Secure JPEG Image Retrieval Method in Cloud Environment[C]. ICCCS 2016, Excellent paper [EI/ISTP]",
      "Lizhi Xiong, Zhengquan Xu, Yanyan Xu. A secure re-encryption scheme for data services in a cloud computing environment [J]. <em>Concurrency and Computation: Practice and Experience</em>, 2015, 27(17):4573-4585 [SCI]（CCF C）",
      "Li Jiang, Tianye Niu, Zhengquan Xu, Yanyan Xu. Integrating Encryption and Marking for Remote Sensing Image Based on Orthogonal Decomposition. <em>IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing</em>, 2015, 8(5):2232-2239, [SCI]（JCR Q1）",
      "Yanyan Xu, Lizhi Xiong, Zhengquan Xu, Shaoming Pan. A Content Security Protection Scheme in JPEG Compressed Domain, <em>Journal of Visual Communication and Image Representation</em>. 2014, 25(4):805-813 [SCI]（JCR Q2）",
      "Xu Yanyan, Yang Bo, Xu Zhengquan. A High Efficient Selective Content Encryption Method Suitable for Satellite Communication System [M]. <em>Computer Engineering and Networking</em>. Springer International Publishing, 2014:775-782. [EI/ISTP]",
      "Zhengquan Xu, Lizhi Xiong, Yanyan Xu. On the provably secure CEW based on orthogonal decomposition, <em>Signal Processing: Image Communication</em>. 2014, 29(5):607-617. [SCI]（中科院二区）",
      "Li Jiang, Zhengquan Xu, Yanyan Xu. Commutative encryption and watermarking based on orthogonal decomposition, <em>Multimedia Tools and Applications</em>. 2014 70(3):1617-1635. [SCI]（JCR Q2）",
      "蒋力, 徐正全, 徐彦彦,等. 结合密码技术与标记技术的遥感影像安全算法[J]. <em>华中科技大学学报（自然科学版）</em>, 2014(6):121-126. [EI]",
      "Jiang L, Xu Z, Xu Y. A new comprehensive security protection for remote sensing image based on the integration of encryption and watermarking[C]. Geoscience and Remote Sensing Symposium. IEEE, 2014:2577-2580. [EI/ISTP]",
      "Jia Shan, Feng Chunhui, Xu Zhengquan, Xu Yanyan. ACE algorithm in the application of video forensics[C], International Conference on Multimedia Communication and Computing Application. 2014. [EI/ISTP]",
      "Chunhui Feng, Zhengquan Xu, Wenting Zhang, Yanyan Xu. Automatic Location of Frame Deletion Point for Digital Video Forensics, Proceedings of IH&MMSec '14, 171-179, 2014 [EI/ISTP]",
      "Yanyan Xu, Huiying Wang, Zhengquan Xu. A Joint Fingerprinting and Decryption Content Security Protection Method for Remote Sensing Image based on Neighborhood Similarity. <em>Journal of Applied Remote Sensing</em>, 2013, 7(1): 1-14 [SCI]",
      "Yanyan Xu, Bo Yang, Zhengquan Xu, Tengyue Mao. A High-efficient Selective Content Encryption Method Suitable for Satellite Communication System. <em>Computer Engineering and Networking Lecture Notes in Electrical Engineering</em> Vol.277, 775-782, 2013 [EI/ISTP]",
      "Li Jiang, Zhengquan Xu, Yanyan Xu. A new comprehensive security protection for remote sensing image based on the integration of encryption and watermarking, Proceedings of IGARSS, 2577-2580, 2013 [EI/ISTP]",
      "徐彦彦，王慧颖，徐正全. 一种基于内容的遥感影像安全分发方法, <em>武汉大学学报（信息科学版）</em>，38(12):1475-1479, 2013 [EI]",
      "Yanyan Xu, Yuxia Zhang, Zhengquan Xu. Content security protection for remote sensing images integrating selective content encryption and digital fingerprint, <em>Journal of Applied Remote Sensing</em>. 2012, 6(1):1-15 [SCI]"
    ]
  },
  achievements: {
    id: "achievements",
    eyebrow: "Recognition",
    title: "专著、发明专利与获奖",
    book: {
      title: "专著",
      text: "徐正全，徐彦彦，《可视媒体信息安全》，高等教育出版社，2012。"
    },
    patents: {
      title: "发明专利",
      items: [
        "徐彦彦，张逸然，闫悦菁. 一种云环境下基于秘密共享的图像安全检索方法，中国，202010307335.3",
        "徐彦彦，饶哲恒. 一种基于深度学习的有约束路由方法，中国，202010151257.2",
        "徐彦彦，饶哲恒，宋方振，赵啸，唐鑫. 一种基于深度学习的中大型网络智能路由选择方法，中国，201910098823.5",
        "徐彦彦，赵啸，龚佳颖. 一种云环境下适用于大规模图像的安全检索方法，中国，201810724726.8",
        "徐彦彦，龚佳颖. 一种云环境下基于词袋模型的图像安全检索方法，中国，201710509995.8",
        "徐正全，蒋力，徐彦彦. 一种在相同操作域上实现交换密码水印的方法，中国，2011101038159",
        "徐正全，熊礼治，徐彦彦. 一种云环境下多媒体内容保护和安全分发方法，中国，201510270061.4",
        "徐正全，冯春晖，张文婷，贾姗，徐彦彦. 一种具有运动自适应性的视频删帧取证方法，中国，2014108437952",
        "徐正全，熊礼治，徐彦彦，王涛. 一种云数据隐私保护安全重加密方法，中国，2014102184584",
        "徐正全，蒋力，徐彦彦. 基于置乱的多媒体数据主动加密与被动保护结合的方法，中国，2010102238923"
      ]
    },
    awards: {
      title: "获奖",
      items: [
        "面向地理信息安全的版权追溯和权限控制关键技术与应用，地理信息科技进步奖特等奖，2019 年（排名第三）",
        "信源加密视频会议系统，湖北省科技进步奖三等奖，2006 年（排名第五）",
        "信源加密视频会议系统，武汉市科技进步奖二等奖，2006 年（排名第五）"
      ]
    }
  },
  students: {
    id: "students",
    eyebrow: "Students & Openings",
    title: "学生培养与加入课题组",
    description: "研究生培养注重理论与实际相结合，着力提升科研攻关、程序开发、论文写作、沟通表达和团队合作能力。学生有机会参与实际科研项目训练，为求职或进一步深造奠定基础。",
    directionTitle: "欢迎联系的方向",
    directions: ["云计算安全、大数据隐私保护、遥感影像安全检索", "智能网络通信、网络流量预测、智能路由", "空间信息实时传输、应急遥感数据平台"],
    alumni: {
      title: "已毕业学生",
      columns: ["姓名", "入学年份/硕博", "本科院校", "毕业去向"],
      rows: [
        ["待补充", "待补充", "待补充", "高校任教（xxx 学校）"],
        ["待补充", "待补充", "待补充", "高校任教（xxx 学校）"],
        ["待补充", "待补充", "待补充", "蚂蚁"],
        ["待补充", "待补充", "待补充", "百度"],
        ["待补充", "待补充", "待补充", "字节跳动"],
        ["待补充", "待补充", "待补充", "华为"],
        ["待补充", "待补充", "待补充", "中国农业银行"]
      ]
    },
    mailFormat: "建议邮件标题：姓名-学校-年级-申请方向"
  },
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "联系方式",
    email: "xuyy@whu.edu.cn",
    address: "武汉市洪山区珞喻路 129 号武汉大学信息学部",
    source: {
      label: "原始信息页",
      href: "https://liesmars.whu.edu.cn/info/1168/5969.htm"
    }
  },
  footer: {
    updated: "Last updated: 2026.05",
    note: "Designed for academic profile, research collaboration and student recruitment."
  }
};
