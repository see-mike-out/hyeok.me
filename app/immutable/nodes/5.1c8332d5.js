import{S as Tt,i as kt,s as It,k as i,q as s,a as r,l as o,m as d,r as l,h as c,c as n,n as h,J as T,b as St,D as e,H as Ke}from"../chunks/index.702c3da6.js";function xt(Et){let g,I,k,V,K,S,L,Q,t,x,X,Y,p,D,Z,$,ee,te,P,ae,ie,oe,re,A,ne,se,le,ce,M,de,he,pe,ue,R,ge,me,fe,G,ye,ve,f,Le,we,C,be,_e,U,Ee,Te,y,Qe,ke,j,Ie,Se,H,xe,De,v,Xe,Pe,O,Ae,Me,q,Re,Ge,w,Ye,Ce,J,Ue,je,z,He,Oe,b,Ze,qe,_,$e,Je,B,ze,Be,F,Fe,Ne,E,et,We,N,Ve;return{c(){g=i("div"),I=i("p"),k=i("a"),V=s("Go back"),K=r(),S=i("h2"),L=s("Utopia - Energy Education App"),Q=r(),t=i("section"),x=i("p"),X=s(`Utopia is a web app for energy education. My team developed user-side and
      content provider-side applications. The user-side application features an
      energy diary, a web comics with audio autoplay, and a book viewer system,
      and the content provider-side application provides management tools for
      those features.`),Y=r(),p=i("p"),D=i("strong"),Z=s("Period"),$=s(" July 2017 - Aug 2018"),ee=i("br"),te=r(),P=i("strong"),ae=s("My Role"),ie=s(" Director, Front-end Developer"),oe=i("br"),re=r(),A=i("strong"),ne=s("Client"),se=s(" Plant (sponsored by Samsung)"),le=i("br"),ce=r(),M=i("strong"),de=s("Designer"),he=s(" Cindy Oh"),pe=i("br"),ue=r(),R=i("strong"),ge=s("Back-end Developer"),me=s(" Jinsu Eun (Ruby on Rails)"),fe=r(),G=i("h3"),ye=s("Concept & Communication"),ve=r(),f=i("img"),we=r(),C=i("p"),be=s(`The client of this project was Plant, an energy education start-up. This
      project started with a vague plan, so it was our mission to deeply
      communicate and specify the system specification. I led this discussion as
      the team's director. For example, the originally requested plan was to
      operate a competitive game based on users's energy usage. However, they
      had limited maintenance budget and security protections for a longer term,
      so our team suggested a reward-based monitoring tool.`),_e=r(),U=i("h3"),Ee=s("Energy Diary"),Te=r(),y=i("img"),ke=r(),j=i("p"),Ie=s(`The energy diary was the main feature of this project. A user can record
      their daily energy use by entering their time of using an appliacne,
      transportaion, etc. Each card in the diary represents the energy usage of
      the corresponding sector, and the user can toggle these cards for detailed
      usage.`),Se=r(),H=i("h3"),xe=s("Monitoring Energy Diary"),De=r(),v=i("img"),Pe=r(),O=i("p"),Ae=s(`This project was intended to teach students about energy issues,
      ultimately helping them to reduce energy consumption. As a baseline
      approach to such a tool, a monitoring panel indicates users about how much
      energy they have used.`),Me=r(),q=i("h3"),Re=s("Energy Diary Tutorial"),Ge=r(),w=i("img"),Ce=r(),J=i("p"),Ue=s(`A step-by-step tutorial was necessary to increase the usability of this
      application among elementary students who were unlikely to be familiar
      with this system. Thus, a system provides a first-time tutorial in a way
      that is comprehensible for young students.`),je=r(),z=i("h3"),He=s("Web Comics with Audio Autoplay"),Oe=r(),b=i("img"),qe=r(),_=i("img"),Je=r(),B=i("p"),ze=s(`The client requested a web comics (or webtoon) feature with audio
      autoplay, which means that each audio clip (e.g., background music, and
      sound effects) is automatically played at specified scroll positions. This
      way of presenting comics was famous in the Korean web comics market, but
      it was a proprietary resource, which meant no open source library was
      available. I developed it from the scratch. I added invisible horizontal
      grids over comics images for audio cues and utilized JavaScript scroll
      events, so that audio tracks are played and stopped at their desired
      scroll position. I concerned with the following two issues in developing
      the grid-based audio autoplay. First, the vertical height of each audio
      cue grid had to be relative because the vertical height of a comics image
      was relative to the screen width. Second, the appropriate interval of the
      grid needed to be decided because the finer the grid, the more difficult
      authors to control; otherwise it would be less timely. Therefore, after a
      few trials, I set the grid size as 100px when the width is 1000px. Second,
      offering a content provider-side application required an easilty testable
      interface. When uploading a new episode, the author first uploads the
      image files of the episode and audio tracks. Then, in another page (the
      second screenshot), the images are rendered and the grid is visibly
      overlaid. The interactive dialog box at the bottom allows the author to
      select the starting and ending points of each audio track, and those
      points appear on the grid. Fading option was also available for the
      seamless transition of audio tracks.`),Be=r(),F=i("h3"),Fe=s("Web-friendly Book Viewer"),Ne=r(),E=i("img"),We=r(),N=i("p"),Ve=s(`The client wanted to provide the textbooks they developed. Our issue was
      how to provide the textbooks on both desktop and mobile. The client wanted
      a page-turn effect, and zooming must be available for user convenience.
      Moreover, they all had to be web-friendly (without third-party
      application) for mobile service. Therefore, I used turn.js which is
      an open-source JavaScript library.`),this.h()},l(W){g=o(W,"DIV",{class:!0});var m=d(g);I=o(m,"P",{});var tt=d(I);k=o(tt,"A",{href:!0});var at=d(k);V=l(at,"Go back"),at.forEach(c),tt.forEach(c),K=n(m),S=o(m,"H2",{});var it=d(S);L=l(it,"Utopia - Energy Education App"),it.forEach(c),Q=n(m),t=o(m,"SECTION",{class:!0});var a=d(t);x=o(a,"P",{});var ot=d(x);X=l(ot,`Utopia is a web app for energy education. My team developed user-side and
      content provider-side applications. The user-side application features an
      energy diary, a web comics with audio autoplay, and a book viewer system,
      and the content provider-side application provides management tools for
      those features.`),ot.forEach(c),Y=n(a),p=o(a,"P",{});var u=d(p);D=o(u,"STRONG",{});var rt=d(D);Z=l(rt,"Period"),rt.forEach(c),$=l(u," July 2017 - Aug 2018"),ee=o(u,"BR",{}),te=n(u),P=o(u,"STRONG",{});var nt=d(P);ae=l(nt,"My Role"),nt.forEach(c),ie=l(u," Director, Front-end Developer"),oe=o(u,"BR",{}),re=n(u),A=o(u,"STRONG",{});var st=d(A);ne=l(st,"Client"),st.forEach(c),se=l(u," Plant (sponsored by Samsung)"),le=o(u,"BR",{}),ce=n(u),M=o(u,"STRONG",{});var lt=d(M);de=l(lt,"Designer"),lt.forEach(c),he=l(u," Cindy Oh"),pe=o(u,"BR",{}),ue=n(u),R=o(u,"STRONG",{});var ct=d(R);ge=l(ct,"Back-end Developer"),ct.forEach(c),me=l(u," Jinsu Eun (Ruby on Rails)"),u.forEach(c),fe=n(a),G=o(a,"H3",{});var dt=d(G);ye=l(dt,"Concept & Communication"),dt.forEach(c),ve=n(a),f=o(a,"IMG",{src:!0,class:!0,alt:!0}),we=n(a),C=o(a,"P",{});var ht=d(C);be=l(ht,`The client of this project was Plant, an energy education start-up. This
      project started with a vague plan, so it was our mission to deeply
      communicate and specify the system specification. I led this discussion as
      the team's director. For example, the originally requested plan was to
      operate a competitive game based on users's energy usage. However, they
      had limited maintenance budget and security protections for a longer term,
      so our team suggested a reward-based monitoring tool.`),ht.forEach(c),_e=n(a),U=o(a,"H3",{});var pt=d(U);Ee=l(pt,"Energy Diary"),pt.forEach(c),Te=n(a),y=o(a,"IMG",{src:!0,class:!0,alt:!0}),ke=n(a),j=o(a,"P",{});var ut=d(j);Ie=l(ut,`The energy diary was the main feature of this project. A user can record
      their daily energy use by entering their time of using an appliacne,
      transportaion, etc. Each card in the diary represents the energy usage of
      the corresponding sector, and the user can toggle these cards for detailed
      usage.`),ut.forEach(c),Se=n(a),H=o(a,"H3",{});var gt=d(H);xe=l(gt,"Monitoring Energy Diary"),gt.forEach(c),De=n(a),v=o(a,"IMG",{src:!0,class:!0,alt:!0}),Pe=n(a),O=o(a,"P",{});var mt=d(O);Ae=l(mt,`This project was intended to teach students about energy issues,
      ultimately helping them to reduce energy consumption. As a baseline
      approach to such a tool, a monitoring panel indicates users about how much
      energy they have used.`),mt.forEach(c),Me=n(a),q=o(a,"H3",{});var ft=d(q);Re=l(ft,"Energy Diary Tutorial"),ft.forEach(c),Ge=n(a),w=o(a,"IMG",{src:!0,class:!0,alt:!0}),Ce=n(a),J=o(a,"P",{});var yt=d(J);Ue=l(yt,`A step-by-step tutorial was necessary to increase the usability of this
      application among elementary students who were unlikely to be familiar
      with this system. Thus, a system provides a first-time tutorial in a way
      that is comprehensible for young students.`),yt.forEach(c),je=n(a),z=o(a,"H3",{});var vt=d(z);He=l(vt,"Web Comics with Audio Autoplay"),vt.forEach(c),Oe=n(a),b=o(a,"IMG",{src:!0,class:!0,alt:!0}),qe=n(a),_=o(a,"IMG",{src:!0,class:!0,alt:!0}),Je=n(a),B=o(a,"P",{});var wt=d(B);ze=l(wt,`The client requested a web comics (or webtoon) feature with audio
      autoplay, which means that each audio clip (e.g., background music, and
      sound effects) is automatically played at specified scroll positions. This
      way of presenting comics was famous in the Korean web comics market, but
      it was a proprietary resource, which meant no open source library was
      available. I developed it from the scratch. I added invisible horizontal
      grids over comics images for audio cues and utilized JavaScript scroll
      events, so that audio tracks are played and stopped at their desired
      scroll position. I concerned with the following two issues in developing
      the grid-based audio autoplay. First, the vertical height of each audio
      cue grid had to be relative because the vertical height of a comics image
      was relative to the screen width. Second, the appropriate interval of the
      grid needed to be decided because the finer the grid, the more difficult
      authors to control; otherwise it would be less timely. Therefore, after a
      few trials, I set the grid size as 100px when the width is 1000px. Second,
      offering a content provider-side application required an easilty testable
      interface. When uploading a new episode, the author first uploads the
      image files of the episode and audio tracks. Then, in another page (the
      second screenshot), the images are rendered and the grid is visibly
      overlaid. The interactive dialog box at the bottom allows the author to
      select the starting and ending points of each audio track, and those
      points appear on the grid. Fading option was also available for the
      seamless transition of audio tracks.`),wt.forEach(c),Be=n(a),F=o(a,"H3",{});var bt=d(F);Fe=l(bt,"Web-friendly Book Viewer"),bt.forEach(c),Ne=n(a),E=o(a,"IMG",{src:!0,class:!0,alt:!0}),We=n(a),N=o(a,"P",{});var _t=d(N);Ve=l(_t,`The client wanted to provide the textbooks they developed. Our issue was
      how to provide the textbooks on both desktop and mobile. The client wanted
      a page-turn effect, and zooming must be available for user convenience.
      Moreover, they all had to be web-friendly (without third-party
      application) for mobile service. Therefore, I used turn.js which is
      an open-source JavaScript library.`),_t.forEach(c),a.forEach(c),m.forEach(c),this.h()},h(){h(k,"href","../"),T(f.src,Le="images/utopia/utopia_main.png")||h(f,"src",Le),h(f,"class","clean w600"),h(f,"alt","Utopia service main page"),T(y.src,Qe="images/utopia/utopia_diary.png")||h(y,"src",Qe),h(y,"class","clean w600"),h(y,"alt","Utopia energy diary logging service"),T(v.src,Xe="images/utopia/utopia_monitoring.png")||h(v,"src",Xe),h(v,"class","clean w600"),h(v,"alt","Utopia energy diary monitoring service"),T(w.src,Ye="images/utopia/utopia_tutorial.png")||h(w,"src",Ye),h(w,"class","clean w600"),h(w,"alt","Utopia energy diary tutorial service"),T(b.src,Ze="images/utopia/utopia_webtoon.png")||h(b,"src",Ze),h(b,"class","clean w600"),h(b,"alt","Utopia webtoon service"),T(_.src,$e="images/utopia/utopia_webtoon_manager.png")||h(_,"src",$e),h(_,"class","clean w600"),h(_,"alt","Utopia webtoon maintenance service"),T(E.src,et="images/utopia/utopia_book.png")||h(E,"src",et),h(E,"class","clean w600"),h(E,"alt","Utopia book viewer service"),h(t,"class","area"),h(g,"class","container")},m(W,m){St(W,g,m),e(g,I),e(I,k),e(k,V),e(g,K),e(g,S),e(S,L),e(g,Q),e(g,t),e(t,x),e(x,X),e(t,Y),e(t,p),e(p,D),e(D,Z),e(p,$),e(p,ee),e(p,te),e(p,P),e(P,ae),e(p,ie),e(p,oe),e(p,re),e(p,A),e(A,ne),e(p,se),e(p,le),e(p,ce),e(p,M),e(M,de),e(p,he),e(p,pe),e(p,ue),e(p,R),e(R,ge),e(p,me),e(t,fe),e(t,G),e(G,ye),e(t,ve),e(t,f),e(t,we),e(t,C),e(C,be),e(t,_e),e(t,U),e(U,Ee),e(t,Te),e(t,y),e(t,ke),e(t,j),e(j,Ie),e(t,Se),e(t,H),e(H,xe),e(t,De),e(t,v),e(t,Pe),e(t,O),e(O,Ae),e(t,Me),e(t,q),e(q,Re),e(t,Ge),e(t,w),e(t,Ce),e(t,J),e(J,Ue),e(t,je),e(t,z),e(z,He),e(t,Oe),e(t,b),e(t,qe),e(t,_),e(t,Je),e(t,B),e(B,ze),e(t,Be),e(t,F),e(F,Fe),e(t,Ne),e(t,E),e(t,We),e(t,N),e(N,Ve)},p:Ke,i:Ke,o:Ke,d(W){W&&c(g)}}}class Pt extends Tt{constructor(g){super(),kt(this,g,null,xt,It,{})}}export{Pt as component};
