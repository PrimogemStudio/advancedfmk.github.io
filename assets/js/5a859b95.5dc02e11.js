"use strict";(self.webpackChunkadvancedfmk_wiki=self.webpackChunkadvancedfmk_wiki||[]).push([[63],{3488:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=i(4848),d=i(8453);const a={},t="\u6e32\u67d3 Live2D \u6a21\u578b",c={id:"advancedfmk-animerenderer/2rendering_live2d",title:"\u6e32\u67d3 Live2D \u6a21\u578b",description:"\u6e32\u67d3\u793a\u4f8b",source:"@site/docs/advancedfmk-animerenderer/2rendering_live2d.md",sourceDirName:"advancedfmk-animerenderer",slug:"/advancedfmk-animerenderer/2rendering_live2d",permalink:"/advancedfmk-wiki/docs/advancedfmk-animerenderer/2rendering_live2d",draft:!1,unlisted:!1,editUrl:"https://github.com/PrimogemStudio/advancedfmk-wiki/blob/main/docs/advancedfmk-animerenderer/2rendering_live2d.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa MMD \u6e32\u67d3\u5668\u5305\u88c5",permalink:"/advancedfmk-wiki/docs/advancedfmk-animerenderer/1creating_mmdentity"},next:{title:"Advanced Framework - \u5b57\u4f53\u5f15\u64ce",permalink:"/advancedfmk-wiki/docs/category/advanced-framework---\u5b57\u4f53\u5f15\u64ce"}},o={},l=[{value:"\u6e32\u67d3\u793a\u4f8b",id:"\u6e32\u67d3\u793a\u4f8b",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}];function s(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u6e32\u67d3-live2d-\u6a21\u578b",children:"\u6e32\u67d3 Live2D \u6a21\u578b"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6e32\u67d3\u793a\u4f8b",children:"\u6e32\u67d3\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53ef\u5728 ",(0,r.jsx)(n.a,{href:"https://github.com/PrimogemStudio/Advanced-Framework/blob/main/src/main/java/com/primogemstudio/advancedfmk/mixin/TestMixin.java",children:"Github"})," \u627e\u5230\u793a\u4f8b"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u7f16\u5199\u4e00\u4e2a\u6ce8\u5165 GameRenderer \u7684 mixin (\u4e0b\u5217\u4ee3\u7801\u4f7f\u7528\u300c\u5b98\u65b9\u53cd\u6df7\u6dc6\u8868\u300d\u7f16\u5199)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="GameRendererMixin.java"',children:'@Mixin(GameRenderer.class)\npublic class GameRendererMixin {\n    // \u5982\u679c\u4f60\u7684\u6a21\u578b\u4f4d\u4e8e xxx/yyy/zzz.model3.json, \u4f20\u5165\u7684\u53c2\u6570\u5fc5\u987b\u662f zzz, xxx/yyy/\n    @Unique\n    private static final Live2DModel model = new Live2DModel(..., ...);\n    @Inject(at = @At("RETURN"), method = "render")\n    public void render(DeltaTracker deltaTracker, boolean renderLevel, CallbackInfo ci) {\n        // \u66f4\u65b0\u6a21\u578b, \u4f20\u5165\u7a97\u53e3\u5927\u5c0f\u53c2\u6570\n        model.update(Minecraft.getInstance().getWindow().getWidth(), Minecraft.getInstance().getWindow().getHeight());\n    }\n}\n\n'})})]})}function m(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var r=i(6540);const d={},a=r.createContext(d);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);