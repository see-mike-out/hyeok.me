import{S as ot,i as st,s as nt,k as a,q as i,a as d,l as o,m as h,r as c,h as l,c as f,n as p,J as Ge,b as rt,D as e,H as Ue}from"../chunks/index.702c3da6.js";function it(at){let m,w,b,x,A,_,H,j,s,k,O,q,t,S,J,V,K,L,M,Q,W,X,Y,C,Z,$,ee,te,E,ae,oe,se,ne,T,re,ie,ce,le,F,he,de,fe,me,N,pe,ue,ge,R,ve,ye,g,ze,be,B,we,_e,I,ke,Se,G,Me,Ce,v,De,Ee,U,Te,Fe,z,Ne,Re,y,Pe,Be,D,Ie;return{c(){m=a("div"),w=a("p"),b=a("a"),x=i("Go back"),A=d(),_=a("h2"),H=i("SNU FactCheck"),j=d(),s=a("section"),k=a("p"),O=i(`SNU FactCheck is a fact-checking portal where general people request an
      issue to be fact-checked and professional journalists fact-check it. This
      service is the first service in Korea that collects factcheck contents
      from various sources. At first, it started with 7 media outlets, but now
      there are 27, including the top 3 broadcasting companies (KBS, MBC, and
      SBS) and the top 2 newspaper companies (Chosun and Jungang). It was our
      mission to provide an effective visual summary for the factcheck contents
      from multiple journalists, which are often likely to be too lengthy to
      read. Therefore, my team suggested FactMeter, a gauge-like object showing
      the degree of an issue's factuality. Also, my mission as a front-end
      developer was to implement the card UI elements responsively to fit
      various screen types.`),q=d(),t=a("p"),S=a("strong"),J=i("Period"),V=i(" Jan 2017 - May 2017"),K=a("br"),L=d(),M=a("strong"),Q=i("My Role"),W=i(" Front-end Developer"),X=a("br"),Y=d(),C=a("strong"),Z=i("Client"),$=i(` SNU Institute for Communication Research
      (sponsored by Naver)`),ee=a("br"),te=d(),E=a("strong"),ae=i("Director"),oe=i(" Prof. Joonhwan Lee"),se=a("br"),ne=d(),T=a("strong"),re=i("Vice Director"),ie=i(" Cindy Oh"),ce=a("br"),le=d(),F=a("strong"),he=i("Designer"),de=i(" Nahi Hong"),fe=a("br"),me=d(),N=a("strong"),pe=i("Back-end Developer"),ue=i(" Jinsu Eun (Ruby on Rails)"),ge=d(),R=a("h3"),ve=i("FactMeter"),ye=d(),g=a("img"),be=d(),B=a("p"),we=i(`The idea of FactMeter was proposed by the director, and the designer
      visualized this. My job was to make the FactMeter effectively represent
      the outcome of factcheck (the degree of uncertainty to which a given topic
      is fact). Basically, the needle of a FactMeter moves along with the
      issue's fact-score (1-5). An easier way might be to provide a static
      FactMeter with the mean of the fact-score. However, the fact-score cannot
      be pooled because an average score easily ignore how much the factuality
      of an issue varies. Thus, the needle should represent the distribution of
      the outcomes, which we chose to animate the outcomes.`),_e=d(),I=a("p"),ke=i(`There was a trade-off: a short period of time enough to present most of
      the outcomes vs. a long perioud time enough to recognize (at least
      glimpse) each outcome. This debate might be a common issue when the
      movement (speed and direction) of an element is actually a visual variable
      of a visualization. In order to obtain an appropriate speed of the
      needle's movement, we tested several spped options with groups of people,
      and applied the most agreed option to the final system.`),Se=d(),G=a("h3"),Me=i("Variation of Card UI"),Ce=d(),v=a("img"),Ee=d(),U=a("p"),Te=i(`A card-based user interface is often applicable to a system showing a list
      of many information objects because it flexibly demarcates each piece of
      information. The cards appear responsively to the screen sizes, enabled by
      precise and dynamic CSS positioning to match the visual and informational
      hierarchies.`),Fe=d(),z=a("h3"),Ne=i("Custom Grid System"),Re=d(),y=a("img"),Be=d(),D=a("p"),Ie=i(`A grid system is pervasive for responsive design, and 12-equal-width grid
      system is conventional. However, the existing Bootstrap and Materialize
      are often hard to cusomize, while our service required a more flexible
      grid system. So, I implemented a custom grid system that fit to our card
      design.`),this.h()},l(P){m=o(P,"DIV",{class:!0});var u=h(m);w=o(u,"P",{});var xe=h(w);b=o(xe,"A",{href:!0});var Ae=h(b);x=c(Ae,"Go back"),Ae.forEach(l),xe.forEach(l),A=f(u),_=o(u,"H2",{});var He=h(_);H=c(He,"SNU FactCheck"),He.forEach(l),j=f(u),s=o(u,"SECTION",{class:!0});var r=h(s);k=o(r,"P",{});var je=h(k);O=c(je,`SNU FactCheck is a fact-checking portal where general people request an
      issue to be fact-checked and professional journalists fact-check it. This
      service is the first service in Korea that collects factcheck contents
      from various sources. At first, it started with 7 media outlets, but now
      there are 27, including the top 3 broadcasting companies (KBS, MBC, and
      SBS) and the top 2 newspaper companies (Chosun and Jungang). It was our
      mission to provide an effective visual summary for the factcheck contents
      from multiple journalists, which are often likely to be too lengthy to
      read. Therefore, my team suggested FactMeter, a gauge-like object showing
      the degree of an issue's factuality. Also, my mission as a front-end
      developer was to implement the card UI elements responsively to fit
      various screen types.`),je.forEach(l),q=f(r),t=o(r,"P",{});var n=h(t);S=o(n,"STRONG",{});var Oe=h(S);J=c(Oe,"Period"),Oe.forEach(l),V=c(n," Jan 2017 - May 2017"),K=o(n,"BR",{}),L=f(n),M=o(n,"STRONG",{});var qe=h(M);Q=c(qe,"My Role"),qe.forEach(l),W=c(n," Front-end Developer"),X=o(n,"BR",{}),Y=f(n),C=o(n,"STRONG",{});var Je=h(C);Z=c(Je,"Client"),Je.forEach(l),$=c(n,` SNU Institute for Communication Research
      (sponsored by Naver)`),ee=o(n,"BR",{}),te=f(n),E=o(n,"STRONG",{});var Ve=h(E);ae=c(Ve,"Director"),Ve.forEach(l),oe=c(n," Prof. Joonhwan Lee"),se=o(n,"BR",{}),ne=f(n),T=o(n,"STRONG",{});var Ke=h(T);re=c(Ke,"Vice Director"),Ke.forEach(l),ie=c(n," Cindy Oh"),ce=o(n,"BR",{}),le=f(n),F=o(n,"STRONG",{});var Le=h(F);he=c(Le,"Designer"),Le.forEach(l),de=c(n," Nahi Hong"),fe=o(n,"BR",{}),me=f(n),N=o(n,"STRONG",{});var Qe=h(N);pe=c(Qe,"Back-end Developer"),Qe.forEach(l),ue=c(n," Jinsu Eun (Ruby on Rails)"),n.forEach(l),ge=f(r),R=o(r,"H3",{});var We=h(R);ve=c(We,"FactMeter"),We.forEach(l),ye=f(r),g=o(r,"IMG",{src:!0,class:!0,alt:!0}),be=f(r),B=o(r,"P",{});var Xe=h(B);we=c(Xe,`The idea of FactMeter was proposed by the director, and the designer
      visualized this. My job was to make the FactMeter effectively represent
      the outcome of factcheck (the degree of uncertainty to which a given topic
      is fact). Basically, the needle of a FactMeter moves along with the
      issue's fact-score (1-5). An easier way might be to provide a static
      FactMeter with the mean of the fact-score. However, the fact-score cannot
      be pooled because an average score easily ignore how much the factuality
      of an issue varies. Thus, the needle should represent the distribution of
      the outcomes, which we chose to animate the outcomes.`),Xe.forEach(l),_e=f(r),I=o(r,"P",{});var Ye=h(I);ke=c(Ye,`There was a trade-off: a short period of time enough to present most of
      the outcomes vs. a long perioud time enough to recognize (at least
      glimpse) each outcome. This debate might be a common issue when the
      movement (speed and direction) of an element is actually a visual variable
      of a visualization. In order to obtain an appropriate speed of the
      needle's movement, we tested several spped options with groups of people,
      and applied the most agreed option to the final system.`),Ye.forEach(l),Se=f(r),G=o(r,"H3",{});var Ze=h(G);Me=c(Ze,"Variation of Card UI"),Ze.forEach(l),Ce=f(r),v=o(r,"IMG",{src:!0,class:!0,alt:!0}),Ee=f(r),U=o(r,"P",{});var $e=h(U);Te=c($e,`A card-based user interface is often applicable to a system showing a list
      of many information objects because it flexibly demarcates each piece of
      information. The cards appear responsively to the screen sizes, enabled by
      precise and dynamic CSS positioning to match the visual and informational
      hierarchies.`),$e.forEach(l),Fe=f(r),z=o(r,"H3",{});var et=h(z);Ne=c(et,"Custom Grid System"),et.forEach(l),Re=f(r),y=o(r,"IMG",{src:!0,class:!0,alt:!0}),Be=f(r),D=o(r,"P",{});var tt=h(D);Ie=c(tt,`A grid system is pervasive for responsive design, and 12-equal-width grid
      system is conventional. However, the existing Bootstrap and Materialize
      are often hard to cusomize, while our service required a more flexible
      grid system. So, I implemented a custom grid system that fit to our card
      design.`),tt.forEach(l),r.forEach(l),u.forEach(l),this.h()},h(){p(b,"href","../"),Ge(g.src,ze="images/factcheck/factcheck_factmeter.png")||p(g,"src",ze),p(g,"class","clean w600"),p(g,"alt","FactMeter for SNU Fact Check service"),Ge(v.src,De="images/factcheck/factcheck_card.png")||p(v,"src",De),p(v,"class","clean w600"),p(v,"alt","The card design of SNU Fact Check service"),Ge(y.src,Pe="images/factcheck/factcheck_grid.png")||p(y,"src",Pe),p(y,"class","clean w600"),p(y,"alt","The grid design of SNU Fact Check service"),p(s,"class","area"),p(m,"class","container")},m(P,u){rt(P,m,u),e(m,w),e(w,b),e(b,x),e(m,A),e(m,_),e(_,H),e(m,j),e(m,s),e(s,k),e(k,O),e(s,q),e(s,t),e(t,S),e(S,J),e(t,V),e(t,K),e(t,L),e(t,M),e(M,Q),e(t,W),e(t,X),e(t,Y),e(t,C),e(C,Z),e(t,$),e(t,ee),e(t,te),e(t,E),e(E,ae),e(t,oe),e(t,se),e(t,ne),e(t,T),e(T,re),e(t,ie),e(t,ce),e(t,le),e(t,F),e(F,he),e(t,de),e(t,fe),e(t,me),e(t,N),e(N,pe),e(t,ue),e(s,ge),e(s,R),e(R,ve),e(s,ye),e(s,g),e(s,be),e(s,B),e(B,we),e(s,_e),e(s,I),e(I,ke),e(s,Se),e(s,G),e(G,Me),e(s,Ce),e(s,v),e(s,Ee),e(s,U),e(U,Te),e(s,Fe),e(s,z),e(z,Ne),e(s,Re),e(s,y),e(s,Be),e(s,D),e(D,Ie)},p:Ue,i:Ue,o:Ue,d(P){P&&l(m)}}}class lt extends ot{constructor(m){super(),st(this,m,null,it,nt,{})}}export{lt as component};
