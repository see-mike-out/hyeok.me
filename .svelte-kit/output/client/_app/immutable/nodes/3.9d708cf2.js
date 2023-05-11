import{S as Qt,i as Xt,s as Zt,k as n,q as l,a as s,l as r,m as c,r as d,h as i,c as o,n as g,J as v,p as $t,b as ea,D as e,H as ft}from"../chunks/index.702c3da6.js";function ta(Yt){let u,T,P,$,ee,E,te,ae,t,C,ne,re,k,se,oe,h,B,ie,le,ce,de,G,he,ge,me,ue,A,fe,pe,ve,we,R,be,ye,_e,Se,x,Ie,Ne,Pe,Te,U,Ee,Ce,ke,Be,z,Ge,Ae,Re,M,xe,Ue,f,pt,ze,X,Me,j,je,De,w,vt,He,D,Je,Oe,H,qe,Ke,b,wt,Fe,J,Ve,Le,O,We,Ye,q,Qe,Xe,K,Ze,$e,y,bt,et,F,tt,at,_,yt,nt,V,rt,st,S,_t,ot,L,it,lt,I,St,ct,Z,dt,W,ht,gt,Y,mt,ut,N,It;return{c(){u=n("div"),T=n("p"),P=n("a"),$=l("Go back"),ee=s(),E=n("h2"),te=l("SNU Card NewsBot"),ae=s(),t=n("section"),C=n("p"),ne=l(`SNU Card NewsBot is an automated, personalized slide news service for the
      7th local election of South Korea. Slide news (or card news) is a
      pervasive snack news format in South Korea because of its convenience and
      quick reading. Users can swipe news slides horizontally to navigate.
      However, generating quality slide news is challenging because it demands
      reasoning about another way of involving visualization, verbal messages,
      layout design, and storytelling at once. In addition, people have
      different concerns about local elections (e.g., regions, candidates,
      parties), manually generating each card news consumes a lot of time. Thus,
      my team applied robot journalism technology to automate this
      personalization and generation process.`),re=s(),k=n("p"),se=l(`In this project, my main job was to render news slides from a raw JSON
      format. To do this, I first designed a declarative (JSON) format grammar
      for data API to help every part of the team (front-end, data management,
      back-end, content generation) effectively communicate with each other.
      Then, I implemented the renderer of news slides given the declarative
      grammar. Another mission was to design and implement a user application to
      reach to general audience. In this case, I applied a card UI because
      higher fluidity of the elements was necessary as the end-product (a web
      app) contained various heterogeneous elements, such as lists of news
      articles and contorl panels for personalization.`),oe=s(),h=n("p"),B=n("strong"),ie=l("Period"),le=l(" Jan 2017 - May 2017"),ce=n("br"),de=s(),G=n("strong"),he=l("My Role"),ge=l(" Front-end Developer and Designer"),me=n("br"),ue=s(),A=n("strong"),fe=l("Client"),pe=l(` SNU Institute for Communication Research
      (sponsored by Naver)`),ve=n("br"),we=s(),R=n("strong"),be=l("Director"),ye=l(" Prof. Joonhwan Lee and Prof. Bongwon Suh"),_e=n("br"),Se=s(),x=n("strong"),Ie=l("Back-end Developer"),Ne=l(" Joonseok Kim, Sion Baek, and Jinho Seo"),Pe=n("br"),Te=s(),U=n("strong"),Ee=l("Database Management"),Ce=l(" Gibeom Park and Jinhan Choi"),ke=n("br"),Be=s(),z=n("strong"),Ge=l("Text Generation"),Ae=l(` Sanghyuk Lee, Youjin Hwang, Seongmin Park,
      Younah Ahn, and Woobin Choi`),Re=s(),M=n("h3"),xe=l("Demo Video"),Ue=s(),f=n("iframe"),ze=s(),X=n("p"),Me=s(),j=n("h3"),je=l("Card Rendering API"),De=s(),w=n("img"),He=s(),D=n("p"),Je=l(`To reduce the system resources for news slide (card) generation, we
      decided to generate cards on browser run-time. Thus, I surveyed prior news
      slide designs to derive layouts for our project, eventually deriving a
      reusable and extendible declarative grammar that works for those various
      slide formats. Major types of information elements were text, image, graph
      visualization, comparison data, and map visualization.`),Oe=s(),H=n("h3"),qe=l("Declarative Grammar for Card Generation"),Ke=s(),b=n("img"),Fe=s(),J=n("p"),Ve=l(`A generalizable grammar was viatal to effectively operate the card
      rendering API. I designed the card rendering grammar through collaboration
      with and data management and content generation teams in terms of card
      layout type (e.g. map+text, vis+text, text, image, cover, and closing) and
      information element types (i.e. text, image, vis).`),Le=s(),O=n("h3"),We=l("Card UI"),Ye=s(),q=n("p"),Qe=l(`Responsive Web design should be aligned with user's journey. An important
      concern was to provide various elements (articles, control panels, and
      alert messages) in a consistent format. The card UI was effective because
      many of the control panels had to be foldable.`),Xe=s(),K=n("h4"),Ze=l("Main Page"),$e=s(),y=n("img"),et=s(),F=n("h4"),tt=l("News Slide Viewer (using slick.js)"),at=s(),_=n("img"),nt=s(),V=n("h4"),rt=l("Personalization Setting Page"),st=s(),S=n("img"),ot=s(),L=n("h4"),it=l("Personal Archive"),lt=s(),I=n("img"),ct=s(),Z=n("p"),dt=s(),W=n("h3"),ht=l("Concept Art"),gt=s(),Y=n("p"),mt=l(`The contents of news slides were highly political, so using image was not
      very easy while text-only views can be boring. Thus, I created various
      illustrations in order to visually assist news contents.`),ut=s(),N=n("img"),this.h()},l(Q){u=r(Q,"DIV",{class:!0});var p=c(u);T=r(p,"P",{});var Nt=c(T);P=r(Nt,"A",{href:!0});var Pt=c(P);$=d(Pt,"Go back"),Pt.forEach(i),Nt.forEach(i),ee=o(p),E=r(p,"H2",{});var Tt=c(E);te=d(Tt,"SNU Card NewsBot"),Tt.forEach(i),ae=o(p),t=r(p,"SECTION",{class:!0});var a=c(t);C=r(a,"P",{});var Et=c(C);ne=d(Et,`SNU Card NewsBot is an automated, personalized slide news service for the
      7th local election of South Korea. Slide news (or card news) is a
      pervasive snack news format in South Korea because of its convenience and
      quick reading. Users can swipe news slides horizontally to navigate.
      However, generating quality slide news is challenging because it demands
      reasoning about another way of involving visualization, verbal messages,
      layout design, and storytelling at once. In addition, people have
      different concerns about local elections (e.g., regions, candidates,
      parties), manually generating each card news consumes a lot of time. Thus,
      my team applied robot journalism technology to automate this
      personalization and generation process.`),Et.forEach(i),re=o(a),k=r(a,"P",{});var Ct=c(k);se=d(Ct,`In this project, my main job was to render news slides from a raw JSON
      format. To do this, I first designed a declarative (JSON) format grammar
      for data API to help every part of the team (front-end, data management,
      back-end, content generation) effectively communicate with each other.
      Then, I implemented the renderer of news slides given the declarative
      grammar. Another mission was to design and implement a user application to
      reach to general audience. In this case, I applied a card UI because
      higher fluidity of the elements was necessary as the end-product (a web
      app) contained various heterogeneous elements, such as lists of news
      articles and contorl panels for personalization.`),Ct.forEach(i),oe=o(a),h=r(a,"P",{});var m=c(h);B=r(m,"STRONG",{});var kt=c(B);ie=d(kt,"Period"),kt.forEach(i),le=d(m," Jan 2017 - May 2017"),ce=r(m,"BR",{}),de=o(m),G=r(m,"STRONG",{});var Bt=c(G);he=d(Bt,"My Role"),Bt.forEach(i),ge=d(m," Front-end Developer and Designer"),me=r(m,"BR",{}),ue=o(m),A=r(m,"STRONG",{});var Gt=c(A);fe=d(Gt,"Client"),Gt.forEach(i),pe=d(m,` SNU Institute for Communication Research
      (sponsored by Naver)`),ve=r(m,"BR",{}),we=o(m),R=r(m,"STRONG",{});var At=c(R);be=d(At,"Director"),At.forEach(i),ye=d(m," Prof. Joonhwan Lee and Prof. Bongwon Suh"),_e=r(m,"BR",{}),Se=o(m),x=r(m,"STRONG",{});var Rt=c(x);Ie=d(Rt,"Back-end Developer"),Rt.forEach(i),Ne=d(m," Joonseok Kim, Sion Baek, and Jinho Seo"),Pe=r(m,"BR",{}),Te=o(m),U=r(m,"STRONG",{});var xt=c(U);Ee=d(xt,"Database Management"),xt.forEach(i),Ce=d(m," Gibeom Park and Jinhan Choi"),ke=r(m,"BR",{}),Be=o(m),z=r(m,"STRONG",{});var Ut=c(z);Ge=d(Ut,"Text Generation"),Ut.forEach(i),Ae=d(m,` Sanghyuk Lee, Youjin Hwang, Seongmin Park,
      Younah Ahn, and Woobin Choi`),m.forEach(i),Re=o(a),M=r(a,"H3",{});var zt=c(M);xe=d(zt,"Demo Video"),zt.forEach(i),Ue=o(a),f=r(a,"IFRAME",{width:!0,height:!0,src:!0,frameborder:!0,allow:!0,style:!0}),c(f).forEach(i),ze=o(a),X=r(a,"P",{}),c(X).forEach(i),Me=o(a),j=r(a,"H3",{});var Mt=c(j);je=d(Mt,"Card Rendering API"),Mt.forEach(i),De=o(a),w=r(a,"IMG",{src:!0,class:!0,alt:!0}),He=o(a),D=r(a,"P",{});var jt=c(D);Je=d(jt,`To reduce the system resources for news slide (card) generation, we
      decided to generate cards on browser run-time. Thus, I surveyed prior news
      slide designs to derive layouts for our project, eventually deriving a
      reusable and extendible declarative grammar that works for those various
      slide formats. Major types of information elements were text, image, graph
      visualization, comparison data, and map visualization.`),jt.forEach(i),Oe=o(a),H=r(a,"H3",{});var Dt=c(H);qe=d(Dt,"Declarative Grammar for Card Generation"),Dt.forEach(i),Ke=o(a),b=r(a,"IMG",{src:!0,class:!0,alt:!0}),Fe=o(a),J=r(a,"P",{});var Ht=c(J);Ve=d(Ht,`A generalizable grammar was viatal to effectively operate the card
      rendering API. I designed the card rendering grammar through collaboration
      with and data management and content generation teams in terms of card
      layout type (e.g. map+text, vis+text, text, image, cover, and closing) and
      information element types (i.e. text, image, vis).`),Ht.forEach(i),Le=o(a),O=r(a,"H3",{});var Jt=c(O);We=d(Jt,"Card UI"),Jt.forEach(i),Ye=o(a),q=r(a,"P",{});var Ot=c(q);Qe=d(Ot,`Responsive Web design should be aligned with user's journey. An important
      concern was to provide various elements (articles, control panels, and
      alert messages) in a consistent format. The card UI was effective because
      many of the control panels had to be foldable.`),Ot.forEach(i),Xe=o(a),K=r(a,"H4",{});var qt=c(K);Ze=d(qt,"Main Page"),qt.forEach(i),$e=o(a),y=r(a,"IMG",{src:!0,class:!0,alt:!0}),et=o(a),F=r(a,"H4",{});var Kt=c(F);tt=d(Kt,"News Slide Viewer (using slick.js)"),Kt.forEach(i),at=o(a),_=r(a,"IMG",{src:!0,class:!0,alt:!0}),nt=o(a),V=r(a,"H4",{});var Ft=c(V);rt=d(Ft,"Personalization Setting Page"),Ft.forEach(i),st=o(a),S=r(a,"IMG",{src:!0,class:!0,alt:!0}),ot=o(a),L=r(a,"H4",{});var Vt=c(L);it=d(Vt,"Personal Archive"),Vt.forEach(i),lt=o(a),I=r(a,"IMG",{src:!0,class:!0,alt:!0}),ct=o(a),Z=r(a,"P",{}),c(Z).forEach(i),dt=o(a),W=r(a,"H3",{});var Lt=c(W);ht=d(Lt,"Concept Art"),Lt.forEach(i),gt=o(a),Y=r(a,"P",{});var Wt=c(Y);mt=d(Wt,`The contents of news slides were highly political, so using image was not
      very easy while text-only views can be boring. Thus, I created various
      illustrations in order to visually assist news contents.`),Wt.forEach(i),ut=o(a),N=r(a,"IMG",{src:!0,class:!0,alt:!0}),a.forEach(i),p.forEach(i),this.h()},h(){g(P,"href","../"),g(f,"width","560"),g(f,"height","315"),v(f.src,pt="https://www.youtube.com/embed/TzF42Ak_B9c")||g(f,"src",pt),g(f,"frameborder","0"),g(f,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),f.allowFullscreen=!0,$t(f,"display","block"),v(w.src,vt="images/snucardnewsbot/snucardnewsbot_api.png")||g(w,"src",vt),g(w,"class","clean w600"),g(w,"alt","The card rendering API for SNU Card News Bot service"),v(b.src,wt="images/snucardnewsbot/snucardnewsbot_api.png")||g(b,"src",wt),g(b,"class","clean w600"),g(b,"alt","The declarative grammar for SNU Card News Bot service"),v(y.src,bt="images/snucardnewsbot/snucardnewsbot_ui_1.png")||g(y,"src",bt),g(y,"class","clean w600"),g(y,"alt","The user interface of the main page of SNU Card News Bot service"),v(_.src,yt="images/snucardnewsbot/snucardnewsbot_ui_2.png")||g(_,"src",yt),g(_,"class","clean w600"),g(_,"alt","The user interface of the news slide viewer of SNU Card News Bot service"),v(S.src,_t="images/snucardnewsbot/snucardnewsbot_ui_3.png")||g(S,"src",_t),g(S,"class","clean w600"),g(S,"alt","The user interface of the personalization setting of SNU Card News Bot service"),v(I.src,St="images/snucardnewsbot/snucardnewsbot_ui_4.png")||g(I,"src",St),g(I,"class","clean w600"),g(I,"alt","The user interface of the personal archive of SNU Card News Bot service"),v(N.src,It="images/snucardnewsbot/snucardnewsbot_concept.png")||g(N,"src",It),g(N,"class","clean w600"),g(N,"alt","The concept art images for SNU Card News Bot service"),g(t,"class","area"),g(u,"class","container")},m(Q,p){ea(Q,u,p),e(u,T),e(T,P),e(P,$),e(u,ee),e(u,E),e(E,te),e(u,ae),e(u,t),e(t,C),e(C,ne),e(t,re),e(t,k),e(k,se),e(t,oe),e(t,h),e(h,B),e(B,ie),e(h,le),e(h,ce),e(h,de),e(h,G),e(G,he),e(h,ge),e(h,me),e(h,ue),e(h,A),e(A,fe),e(h,pe),e(h,ve),e(h,we),e(h,R),e(R,be),e(h,ye),e(h,_e),e(h,Se),e(h,x),e(x,Ie),e(h,Ne),e(h,Pe),e(h,Te),e(h,U),e(U,Ee),e(h,Ce),e(h,ke),e(h,Be),e(h,z),e(z,Ge),e(h,Ae),e(t,Re),e(t,M),e(M,xe),e(t,Ue),e(t,f),e(t,ze),e(t,X),e(t,Me),e(t,j),e(j,je),e(t,De),e(t,w),e(t,He),e(t,D),e(D,Je),e(t,Oe),e(t,H),e(H,qe),e(t,Ke),e(t,b),e(t,Fe),e(t,J),e(J,Ve),e(t,Le),e(t,O),e(O,We),e(t,Ye),e(t,q),e(q,Qe),e(t,Xe),e(t,K),e(K,Ze),e(t,$e),e(t,y),e(t,et),e(t,F),e(F,tt),e(t,at),e(t,_),e(t,nt),e(t,V),e(V,rt),e(t,st),e(t,S),e(t,ot),e(t,L),e(L,it),e(t,lt),e(t,I),e(t,ct),e(t,Z),e(t,dt),e(t,W),e(W,ht),e(t,gt),e(t,Y),e(Y,mt),e(t,ut),e(t,N)},p:ft,i:ft,o:ft,d(Q){Q&&i(u)}}}class na extends Qt{constructor(u){super(),Xt(this,u,null,ta,Zt,{})}}export{na as component};
