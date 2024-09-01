/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@fluentui/web-components@2.6.1/dist/esm/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{DesignToken as e,display as t,focusVisible as o,forcedColorsStylesheetBehavior as a,AccordionItem as r,accordionItemTemplate as l,Accordion as i,accordionTemplate as n,disabledCursor as s,PropertyStyleSheetBehavior as c,Anchor as d,anchorTemplate as u,AnchoredRegion as h,anchoredRegionTemplate as p,Badge as g,badgeTemplate as b,Breadcrumb as f,breadcrumbTemplate as v,BreadcrumbItem as $,breadcrumbItemTemplate as m,Button as x,buttonTemplate as w,calendarTemplate as y,CalendarTitleTemplate as k,Calendar as F,Card as V,cardTemplate as D,composedParent as z,Checkbox as T,checkboxTemplate as C,Combobox as B,comboboxTemplate as L,DataGridCell as H,dataGridCellTemplate as S,DataGridRow as j,dataGridRowTemplate as N,DataGrid as I,dataGridTemplate as G,FoundationElement as O,Dialog as R,dialogTemplate as P,Divider as M,dividerTemplate as _,Flipper as A,flipperTemplate as E,HorizontalScroll as X,horizontalScrollTemplate as q,ListboxOption as U,listboxTemplate as W,Listbox as Y,listboxOptionTemplate as Z,MenuItem as K,Menu as J,menuTemplate as Q,menuItemTemplate as ee,NumberField as te,numberFieldTemplate as oe,progressTemplate as ae,BaseProgress as re,progressRingTemplate as le,Radio as ie,radioTemplate as ne,RadioGroup as se,radioGroupTemplate as ce,whitespaceFilter as de,startSlotTemplate as ue,endSlotTemplate as he,Search as pe,Select as ge,selectTemplate as be,Skeleton as fe,skeletonTemplate as ve,Slider as $e,sliderTemplate as me,SliderLabel as xe,sliderLabelTemplate as we,Switch as ye,switchTemplate as ke,Tab as Fe,tabTemplate as Ve,TabPanel as De,tabPanelTemplate as ze,Tabs as Te,tabsTemplate as Ce,TextArea as Be,textAreaTemplate as Le,TextField as He,textFieldTemplate as Se,Toolbar as je,toolbarTemplate as Ne,Tooltip as Ie,tooltipTemplate as Ge,TreeView as Oe,treeViewTemplate as Re,TreeItem as Pe,treeItemTemplate as Me,DesignSystem as _e}from"/npm/@microsoft/fast-foundation@2.49.6/+esm";export{Accordion,AccordionItem,AnchoredRegion,Breadcrumb,BreadcrumbItem,DataGrid,DataGridCell,DataGridRow,Dialog,Divider,Flipper,MenuItem,Radio,RadioGroup,Skeleton,Slider,SliderLabel,Switch,Tab,TabPanel,Tabs,TreeItem,TreeView}from"/npm/@microsoft/fast-foundation@2.49.6/+esm";import{cssPartial as Ae,css as Ee,attr as Xe,DOM as qe,booleanConverter as Ue,Observable as We,nullableNumberConverter as Ye,html as Ze,slotted as Ke,ref as Je}from"/npm/@microsoft/fast-element@1.13.0/+esm";import{Direction as Qe,SystemColors as et}from"/npm/@microsoft/fast-web-utilities@5.4.1/+esm";import{ColorRGBA64 as tt,rgbToRelativeLuminance as ot,clamp as at,rgbToHSL as rt,ColorHSL as lt,hslToRGB as it,rgbToLAB as nt,labToRGB as st,ColorLAB as ct,interpolateRGB as dt,roundToPrecisionSmall as ut,parseColorHexRGB as ht,calculateOverlayColor as pt,computeAlphaBlend as gt}from"/npm/@microsoft/fast-colors@5.3.1/+esm";import{__decorate as bt}from"/npm/tslib@2.6.2/+esm";function ft(e,t){const o=e.relativeLuminance>t.relativeLuminance?e:t,a=e.relativeLuminance>t.relativeLuminance?t:e;return(o.relativeLuminance+.05)/(a.relativeLuminance+.05)}const vt=Object.freeze({create:(e,t,o)=>new $t(e,t,o),from:e=>new $t(e.r,e.g,e.b)});class $t extends tt{constructor(e,t,o){super(e,t,o,1),this.toColorString=this.toStringHexRGB,this.contrast=ft.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=ot(this)}static fromObject(e){return new $t(e.r,e.g,e.b)}}function mt(e,t,o=0,a=e.length-1){if(a===o)return e[o];const r=Math.floor((a-o)/2)+o;return t(e[r])?mt(e,t,o,r):mt(e,t,r+1,a)}const xt=(-.1+Math.sqrt(.21))/2;function wt(e){return e.relativeLuminance<=xt}function yt(e){return wt(e)?-1:1}const kt={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};const Ft=Object.freeze({create:function(e,t,o){return"number"==typeof e?Ft.from(vt.create(e,t,o)):Ft.from(e)},from:function(e,t){return function(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const o in t)if(typeof t[o]!=typeof e[o])return!1;return!0}(e)?Vt.from(e,t):Vt.from(vt.create(e.r,e.g,e.b),t)}});class Vt{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,o,a){void 0===o&&(o=this.closestIndexOf(e));let r=this.swatches;const l=this.lastIndex;let i=o;void 0===a&&(a=yt(e));return-1===a&&(r=this.reversedSwatches,i=l-i),mt(r,(o=>ft(e,o)>=t),i,l)}get(e){return this.swatches[e]||this.swatches[at(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const o=this.swatches.reduce(((t,o)=>Math.abs(o.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?o:t));return t=this.swatches.indexOf(o),this.closestIndexCache.set(e.relativeLuminance,t),t}static saturationBump(e,t){const o=rt(e).s,a=rt(t);if(a.s<o){const e=new lt(a.h,o,a.l);return it(e)}return t}static ramp(e){const t=e/100;return t>.5?(t-.5)/.5:2*t}static createHighResolutionPalette(e){const t=[],o=nt(tt.fromObject(e).roundToPrecision(4)),a=st(new ct(0,o.a,o.b)).clamp().roundToPrecision(4),r=st(new ct(50,o.a,o.b)).clamp().roundToPrecision(4),l=st(new ct(100,o.a,o.b)).clamp().roundToPrecision(4),i=new tt(0,0,0),n=new tt(1,1,1),s=l.equalValue(n)?0:14,c=a.equalValue(i)?0:14;for(let e=100+s;e>=0-c;e-=.5){let o;if(e<0){o=dt(e/c+1,i,a)}else if(e<=50)o=dt(Vt.ramp(e),a,r);else if(e<=100)o=dt(Vt.ramp(e),r,l);else{o=dt((e-100)/s,l,n)}o=Vt.saturationBump(r,o).roundToPrecision(4),t.push(vt.from(o))}return new Vt(e,t)}static adjustEnd(e,t,o,a){const r=-1===a?t.swatches:t.reversedSwatches,l=e=>{const o=t.closestIndexOf(e);return 1===a?t.lastIndex-o:o};1===a&&o.reverse();const i=e(o[o.length-2]);if(ut(ft(o[o.length-1],o[o.length-2]),2)<i){o.pop();const e=l(t.colorContrast(r[t.lastIndex],i,void 0,a))-l(o[o.length-2]);let n=1;for(let a=o.length-e-1;a<o.length;a++){const e=l(o[a]),i=a===o.length-1?t.lastIndex:e+n;o[a]=r[i],n++}}1===a&&o.reverse()}static createColorPaletteByContrast(e,t){const o=Vt.createHighResolutionPalette(e),a=e=>{const o=t.stepContrast+t.stepContrast*(1-e.relativeLuminance)*t.stepContrastRamp;return ut(o,2)},r=[];let l=t.preserveSource?e:o.swatches[0];r.push(l);do{const e=a(l);l=o.colorContrast(l,e,void 0,1),r.push(l)}while(l.relativeLuminance>0);if(t.preserveSource){l=e;do{const e=a(l);l=o.colorContrast(l,e,void 0,-1),r.unshift(l)}while(l.relativeLuminance<1)}return this.adjustEnd(a,o,r,-1),t.preserveSource&&this.adjustEnd(a,o,r,1),r}static from(e,t){const o=void 0===t?kt:Object.assign(Object.assign({},kt),t);return new Vt(e,Object.freeze(Vt.createColorPaletteByContrast(e,o)))}}const Dt=vt.create(1,1,1),zt=vt.create(0,0,0),Tt=vt.create(.5,.5,.5),Ct=ht("#0078D4"),Bt=vt.create(Ct.r,Ct.g,Ct.b);function Lt(e,t,o,a,r){const l=e=>e.contrast(Dt)>=r?Dt:zt,i=l(e),n=l(t);return{rest:i,hover:n,active:i.relativeLuminance===n.relativeLuminance?i:l(o),focus:l(a)}}class Ht{constructor(e,t,o,a){this.toColorString=()=>this.cssGradient,this.contrast=ft.bind(null,this),this.createCSS=this.toColorString,this.color=new tt(e,t,o),this.cssGradient=a,this.relativeLuminance=ot(this.color),this.r=e,this.g=t,this.b=o}static fromObject(e,t){return new Ht(e.r,e.g,e.b,t)}}const St=new tt(0,0,0),jt=new tt(1,1,1);function Nt(e,t,o,a,r,l,i,n,s=10,c=!1){const d=e.closestIndexOf(t);function u(o){if(c){const a=e.closestIndexOf(t),r=e.get(a),l=o.relativeLuminance<t.relativeLuminance?St:jt,i=pt(ht(o.toColorString()),ht(r.toColorString()),l).roundToPrecision(2),n=gt(ht(t.toColorString()),i);return vt.from(n)}return o}void 0===n&&(n=yt(t));const h=d+n*o,p=h+n*(a-o),g=h+n*(r-o),b=h+n*(l-o),f=-1===n?0:100-s,v=-1===n?s:100;function $(t,o){const a=e.get(t);if(o){const o=e.get(t+n*i),r=-1===n?o:a,l=-1===n?a:o,s=`linear-gradient(${u(r).toColorString()} ${f}%, ${u(l).toColorString()} ${v}%)`;return Ht.fromObject(r,s)}return u(a)}return{rest:$(h,!0),hover:$(p,!0),active:$(g,!1),focus:$(b,!0)}}function It(e,t,o,a,r,l,i,n){null==n&&(n=yt(t));const s=e.closestIndexOf(e.colorContrast(t,o));return{rest:e.get(s+n*a),hover:e.get(s+n*r),active:e.get(s+n*l),focus:e.get(s+n*i)}}function Gt(e,t,o,a,r,l,i){const n=e.closestIndexOf(t);return null==i&&(i=yt(t)),{rest:e.get(n+i*o),hover:e.get(n+i*a),active:e.get(n+i*r),focus:e.get(n+i*l)}}function Ot(e,t,o,a,r,l,i=void 0,n,s,c,d,u=void 0){return wt(t)?Gt(e,t,n,s,c,d,u):Gt(e,t,o,a,r,l,i)}var Rt;function Pt(e,t){return e.closestIndexOf((o=t,vt.create(o,o,o)));var o}function Mt(e,t,o){return e.get(Pt(e,t)+-1*o)}!function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"}(Rt||(Rt={}));const{create:_t}=e;function At(t){return e.create({name:t,cssCustomPropertyName:null})}const Et=_t("direction").withDefault(Qe.ltr),Xt=_t("disabled-opacity").withDefault(.3),qt=_t("base-height-multiplier").withDefault(8),Ut=_t("base-horizontal-spacing-multiplier").withDefault(3),Wt=_t("density").withDefault(0),Yt=_t("design-unit").withDefault(4),Zt=_t("control-corner-radius").withDefault(4),Kt=_t("layer-corner-radius").withDefault(8),Jt=_t("stroke-width").withDefault(1),Qt=_t("focus-stroke-width").withDefault(2),eo=_t("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),to=_t("font-weight").withDefault(400);function oo(e){return t=>{const o=e.getValueFor(t),a=to.getValueFor(t);if(o.endsWith("px")){const e=Number.parseFloat(o.replace("px",""));if(e<=12)return`"wght" ${a}, "opsz" 8`;if(e>24)return`"wght" ${a}, "opsz" 36`}return`"wght" ${a}, "opsz" 10.5`}}const ao=_t("type-ramp-base-font-size").withDefault("14px"),ro=_t("type-ramp-base-line-height").withDefault("20px"),lo=_t("type-ramp-base-font-variations").withDefault(oo(ao)),io=_t("type-ramp-minus-1-font-size").withDefault("12px"),no=_t("type-ramp-minus-1-line-height").withDefault("16px"),so=_t("type-ramp-minus-1-font-variations").withDefault(oo(io)),co=_t("type-ramp-minus-2-font-size").withDefault("10px"),uo=_t("type-ramp-minus-2-line-height").withDefault("14px"),ho=_t("type-ramp-minus-2-font-variations").withDefault(oo(co)),po=_t("type-ramp-plus-1-font-size").withDefault("16px"),go=_t("type-ramp-plus-1-line-height").withDefault("22px"),bo=_t("type-ramp-plus-1-font-variations").withDefault(oo(po)),fo=_t("type-ramp-plus-2-font-size").withDefault("20px"),vo=_t("type-ramp-plus-2-line-height").withDefault("26px"),$o=_t("type-ramp-plus-2-font-variations").withDefault(oo(fo)),mo=_t("type-ramp-plus-3-font-size").withDefault("24px"),xo=_t("type-ramp-plus-3-line-height").withDefault("32px"),wo=_t("type-ramp-plus-3-font-variations").withDefault(oo(mo)),yo=_t("type-ramp-plus-4-font-size").withDefault("28px"),ko=_t("type-ramp-plus-4-line-height").withDefault("36px"),Fo=_t("type-ramp-plus-4-font-variations").withDefault(oo(yo)),Vo=_t("type-ramp-plus-5-font-size").withDefault("32px"),Do=_t("type-ramp-plus-5-line-height").withDefault("40px"),zo=_t("type-ramp-plus-5-font-variations").withDefault(oo(Vo)),To=_t("type-ramp-plus-6-font-size").withDefault("40px"),Co=_t("type-ramp-plus-6-line-height").withDefault("52px"),Bo=_t("type-ramp-plus-6-font-variations").withDefault(oo(To)),Lo=_t("base-layer-luminance").withDefault(Rt.LightMode),Ho=At("accent-fill-rest-delta").withDefault(0),So=At("accent-fill-hover-delta").withDefault(-2),jo=At("accent-fill-active-delta").withDefault(-5),No=At("accent-fill-focus-delta").withDefault(0),Io=At("accent-foreground-rest-delta").withDefault(0),Go=At("accent-foreground-hover-delta").withDefault(3),Oo=At("accent-foreground-active-delta").withDefault(-8),Ro=At("accent-foreground-focus-delta").withDefault(0),Po=At("neutral-fill-rest-delta").withDefault(-1),Mo=At("neutral-fill-hover-delta").withDefault(1),_o=At("neutral-fill-active-delta").withDefault(0),Ao=At("neutral-fill-focus-delta").withDefault(0),Eo=At("neutral-fill-input-rest-delta").withDefault(-1),Xo=At("neutral-fill-input-hover-delta").withDefault(1),qo=At("neutral-fill-input-active-delta").withDefault(0),Uo=At("neutral-fill-input-focus-delta").withDefault(-2),Wo=At("neutral-fill-input-alt-rest-delta").withDefault(2),Yo=At("neutral-fill-input-alt-hover-delta").withDefault(4),Zo=At("neutral-fill-input-alt-active-delta").withDefault(6),Ko=At("neutral-fill-input-alt-focus-delta").withDefault(2),Jo=At("neutral-fill-layer-rest-delta").withDefault(-2),Qo=At("neutral-fill-layer-hover-delta").withDefault(-3),ea=At("neutral-fill-layer-active-delta").withDefault(-3),ta=At("neutral-fill-layer-alt-rest-delta").withDefault(-1),oa=At("neutral-fill-secondary-rest-delta").withDefault(3),aa=At("neutral-fill-secondary-hover-delta").withDefault(2),ra=At("neutral-fill-secondary-active-delta").withDefault(1),la=At("neutral-fill-secondary-focus-delta").withDefault(3),ia=At("neutral-fill-stealth-rest-delta").withDefault(0),na=At("neutral-fill-stealth-hover-delta").withDefault(3),sa=At("neutral-fill-stealth-active-delta").withDefault(2),ca=At("neutral-fill-stealth-focus-delta").withDefault(0),da=At("neutral-fill-strong-rest-delta").withDefault(0),ua=At("neutral-fill-strong-hover-delta").withDefault(8),ha=At("neutral-fill-strong-active-delta").withDefault(-5),pa=At("neutral-fill-strong-focus-delta").withDefault(0),ga=At("neutral-stroke-rest-delta").withDefault(8),ba=At("neutral-stroke-hover-delta").withDefault(12),fa=At("neutral-stroke-active-delta").withDefault(6),va=At("neutral-stroke-focus-delta").withDefault(8),$a=At("neutral-stroke-control-rest-delta").withDefault(3),ma=At("neutral-stroke-control-hover-delta").withDefault(5),xa=At("neutral-stroke-control-active-delta").withDefault(5),wa=At("neutral-stroke-control-focus-delta").withDefault(5),ya=At("neutral-stroke-divider-rest-delta").withDefault(4),ka=At("neutral-stroke-layer-rest-delta").withDefault(3),Fa=At("neutral-stroke-layer-hover-delta").withDefault(3),Va=At("neutral-stroke-layer-active-delta").withDefault(3),Da=At("neutral-stroke-strong-hover-delta").withDefault(0),za=At("neutral-stroke-strong-active-delta").withDefault(0),Ta=At("neutral-stroke-strong-focus-delta").withDefault(0),Ca=_t("neutral-base-color").withDefault(Tt),Ba=At("neutral-palette").withDefault((e=>Ft.from(Ca.getValueFor(e)))),La=_t("accent-base-color").withDefault(Bt),Ha=At("accent-palette").withDefault((e=>Ft.from(La.getValueFor(e)))),Sa=At("neutral-layer-card-container-recipe").withDefault({evaluate:e=>Mt(Ba.getValueFor(e),Lo.getValueFor(e),Jo.getValueFor(e))}),ja=_t("neutral-layer-card-container").withDefault((e=>Sa.getValueFor(e).evaluate(e))),Na=At("neutral-layer-floating-recipe").withDefault({evaluate:e=>function(e,t,o){return e.get(Pt(e,t)+o)}(Ba.getValueFor(e),Lo.getValueFor(e),Jo.getValueFor(e))}),Ia=_t("neutral-layer-floating").withDefault((e=>Na.getValueFor(e).evaluate(e))),Ga=At("neutral-layer-1-recipe").withDefault({evaluate:e=>function(e,t){return e.get(Pt(e,t))}(Ba.getValueFor(e),Lo.getValueFor(e))}),Oa=_t("neutral-layer-1").withDefault((e=>Ga.getValueFor(e).evaluate(e))),Ra=At("neutral-layer-2-recipe").withDefault({evaluate:e=>Mt(Ba.getValueFor(e),Lo.getValueFor(e),Jo.getValueFor(e))}),Pa=_t("neutral-layer-2").withDefault((e=>Ra.getValueFor(e).evaluate(e))),Ma=At("neutral-layer-3-recipe").withDefault({evaluate:e=>function(e,t,o){return e.get(Pt(e,t)+-1*o*2)}(Ba.getValueFor(e),Lo.getValueFor(e),Jo.getValueFor(e))}),_a=_t("neutral-layer-3").withDefault((e=>Ma.getValueFor(e).evaluate(e))),Aa=At("neutral-layer-4-recipe").withDefault({evaluate:e=>function(e,t,o){return e.get(Pt(e,t)+-1*o*3)}(Ba.getValueFor(e),Lo.getValueFor(e),Jo.getValueFor(e))}),Ea=_t("neutral-layer-4").withDefault((e=>Aa.getValueFor(e).evaluate(e))),Xa=_t("fill-color").withDefault((e=>Oa.getValueFor(e)));var qa;!function(e){e[e.normal=4.5]="normal",e[e.large=3]="large"}(qa||(qa={}));const Ua=At("accent-fill-recipe").withDefault({evaluate:(e,t)=>function(e,t,o,a,r,l,i,n,s,c,d,u,h,p){return wt(t)?It(e,t,s,c,d,u,h,p):It(e,t,o,a,r,l,i,n)}(Ha.getValueFor(e),t||Xa.getValueFor(e),5,Ho.getValueFor(e),So.getValueFor(e),jo.getValueFor(e),No.getValueFor(e),void 0,8,Ho.getValueFor(e),So.getValueFor(e),jo.getValueFor(e),No.getValueFor(e),void 0)}),Wa=_t("accent-fill-rest").withDefault((e=>Ua.getValueFor(e).evaluate(e).rest)),Ya=_t("accent-fill-hover").withDefault((e=>Ua.getValueFor(e).evaluate(e).hover)),Za=_t("accent-fill-active").withDefault((e=>Ua.getValueFor(e).evaluate(e).active)),Ka=_t("accent-fill-focus").withDefault((e=>Ua.getValueFor(e).evaluate(e).focus)),Ja=At("foreground-on-accent-recipe").withDefault({evaluate:e=>Lt(Wa.getValueFor(e),Ya.getValueFor(e),Za.getValueFor(e),Ka.getValueFor(e),qa.normal)}),Qa=_t("foreground-on-accent-rest").withDefault((e=>Ja.getValueFor(e).evaluate(e).rest)),er=_t("foreground-on-accent-hover").withDefault((e=>Ja.getValueFor(e).evaluate(e).hover)),tr=_t("foreground-on-accent-active").withDefault((e=>Ja.getValueFor(e).evaluate(e).active)),or=_t("foreground-on-accent-focus").withDefault((e=>Ja.getValueFor(e).evaluate(e).focus)),ar=At("accent-foreground-recipe").withDefault({evaluate:(e,t)=>It(Ha.getValueFor(e),t||Xa.getValueFor(e),9.5,Io.getValueFor(e),Go.getValueFor(e),Oo.getValueFor(e),Ro.getValueFor(e))}),rr=_t("accent-foreground-rest").withDefault((e=>ar.getValueFor(e).evaluate(e).rest)),lr=_t("accent-foreground-hover").withDefault((e=>ar.getValueFor(e).evaluate(e).hover)),ir=_t("accent-foreground-active").withDefault((e=>ar.getValueFor(e).evaluate(e).active)),nr=_t("accent-foreground-focus").withDefault((e=>ar.getValueFor(e).evaluate(e).focus)),sr=At("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>Nt(Ba.getValueFor(e),t||Xa.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)}),cr=_t("accent-stroke-control-rest").withDefault((e=>sr.getValueFor(e).evaluate(e,Wa.getValueFor(e)).rest)),dr=_t("accent-stroke-control-hover").withDefault((e=>sr.getValueFor(e).evaluate(e,Ya.getValueFor(e)).hover)),ur=_t("accent-stroke-control-active").withDefault((e=>sr.getValueFor(e).evaluate(e,Za.getValueFor(e)).active)),hr=_t("accent-stroke-control-focus").withDefault((e=>sr.getValueFor(e).evaluate(e,Ka.getValueFor(e)).focus)),pr=At("neutral-fill-recipe").withDefault({evaluate:(e,t)=>Ot(Ba.getValueFor(e),t||Xa.getValueFor(e),Po.getValueFor(e),Mo.getValueFor(e),_o.getValueFor(e),Ao.getValueFor(e),void 0,2,3,1,2,void 0)}),gr=_t("neutral-fill-rest").withDefault((e=>pr.getValueFor(e).evaluate(e).rest)),br=_t("neutral-fill-hover").withDefault((e=>pr.getValueFor(e).evaluate(e).hover)),fr=_t("neutral-fill-active").withDefault((e=>pr.getValueFor(e).evaluate(e).active)),vr=_t("neutral-fill-focus").withDefault((e=>pr.getValueFor(e).evaluate(e).focus)),$r=At("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>Ot(Ba.getValueFor(e),t||Xa.getValueFor(e),Eo.getValueFor(e),Xo.getValueFor(e),qo.getValueFor(e),Uo.getValueFor(e),void 0,2,3,1,0,void 0)}),mr=_t("neutral-fill-input-rest").withDefault((e=>$r.getValueFor(e).evaluate(e).rest)),xr=_t("neutral-fill-input-hover").withDefault((e=>$r.getValueFor(e).evaluate(e).hover)),wr=_t("neutral-fill-input-active").withDefault((e=>$r.getValueFor(e).evaluate(e).active)),yr=_t("neutral-fill-input-focus").withDefault((e=>$r.getValueFor(e).evaluate(e).focus)),kr=At("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>Ot(Ba.getValueFor(e),t||Xa.getValueFor(e),Wo.getValueFor(e),Yo.getValueFor(e),Zo.getValueFor(e),Ko.getValueFor(e),1,Wo.getValueFor(e),Wo.getValueFor(e)-Yo.getValueFor(e),Wo.getValueFor(e)-Zo.getValueFor(e),Ko.getValueFor(e),1)}),Fr=_t("neutral-fill-input-alt-rest").withDefault((e=>kr.getValueFor(e).evaluate(e).rest)),Vr=_t("neutral-fill-input-alt-hover").withDefault((e=>kr.getValueFor(e).evaluate(e).hover)),Dr=_t("neutral-fill-input-alt-active").withDefault((e=>kr.getValueFor(e).evaluate(e).active)),zr=_t("neutral-fill-input-alt-focus").withDefault((e=>kr.getValueFor(e).evaluate(e).focus)),Tr=At("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>Gt(Ba.getValueFor(e),t||Xa.getValueFor(e),Jo.getValueFor(e),Qo.getValueFor(e),ea.getValueFor(e),Jo.getValueFor(e),1)}),Cr=_t("neutral-fill-layer-rest").withDefault((e=>Tr.getValueFor(e).evaluate(e).rest)),Br=_t("neutral-fill-layer-hover").withDefault((e=>Tr.getValueFor(e).evaluate(e).hover)),Lr=_t("neutral-fill-layer-active").withDefault((e=>Tr.getValueFor(e).evaluate(e).active)),Hr=At("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>Gt(Ba.getValueFor(e),t||Xa.getValueFor(e),ta.getValueFor(e),ta.getValueFor(e),ta.getValueFor(e),ta.getValueFor(e))}),Sr=_t("neutral-fill-layer-alt-rest").withDefault((e=>Hr.getValueFor(e).evaluate(e).rest)),jr=At("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>Gt(Ba.getValueFor(e),t||Xa.getValueFor(e),oa.getValueFor(e),aa.getValueFor(e),ra.getValueFor(e),la.getValueFor(e))}),Nr=_t("neutral-fill-secondary-rest").withDefault((e=>jr.getValueFor(e).evaluate(e).rest)),Ir=_t("neutral-fill-secondary-hover").withDefault((e=>jr.getValueFor(e).evaluate(e).hover)),Gr=_t("neutral-fill-secondary-active").withDefault((e=>jr.getValueFor(e).evaluate(e).active)),Or=_t("neutral-fill-secondary-focus").withDefault((e=>jr.getValueFor(e).evaluate(e).focus)),Rr=At("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>Gt(Ba.getValueFor(e),t||Xa.getValueFor(e),ia.getValueFor(e),na.getValueFor(e),sa.getValueFor(e),ca.getValueFor(e))}),Pr=_t("neutral-fill-stealth-rest").withDefault((e=>Rr.getValueFor(e).evaluate(e).rest)),Mr=_t("neutral-fill-stealth-hover").withDefault((e=>Rr.getValueFor(e).evaluate(e).hover)),_r=_t("neutral-fill-stealth-active").withDefault((e=>Rr.getValueFor(e).evaluate(e).active)),Ar=_t("neutral-fill-stealth-focus").withDefault((e=>Rr.getValueFor(e).evaluate(e).focus)),Er=At("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>It(Ba.getValueFor(e),t||Xa.getValueFor(e),4.5,da.getValueFor(e),ua.getValueFor(e),ha.getValueFor(e),pa.getValueFor(e))}),Xr=_t("neutral-fill-strong-rest").withDefault((e=>Er.getValueFor(e).evaluate(e).rest)),qr=_t("neutral-fill-strong-hover").withDefault((e=>Er.getValueFor(e).evaluate(e).hover)),Ur=_t("neutral-fill-strong-active").withDefault((e=>Er.getValueFor(e).evaluate(e).active)),Wr=_t("neutral-fill-strong-focus").withDefault((e=>Er.getValueFor(e).evaluate(e).focus)),Yr=At("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>It(Ba.getValueFor(e),t||Xa.getValueFor(e),16,0,-19,-30,0)}),Zr=_t("neutral-foreground-rest").withDefault((e=>Yr.getValueFor(e).evaluate(e).rest)),Kr=_t("neutral-foreground-hover").withDefault((e=>Yr.getValueFor(e).evaluate(e).hover)),Jr=_t("neutral-foreground-active").withDefault((e=>Yr.getValueFor(e).evaluate(e).active)),Qr=_t("neutral-foreground-focus").withDefault((e=>Yr.getValueFor(e).evaluate(e).focus)),el=At("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>function(e,t,o){return e.colorContrast(t,o)}(Ba.getValueFor(e),t||Xa.getValueFor(e),4.5)}),tl=_t("neutral-foreground-hint").withDefault((e=>el.getValueFor(e).evaluate(e))),ol=At("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>Gt(Ba.getValueFor(e),t||Xa.getValueFor(e),ga.getValueFor(e),ba.getValueFor(e),fa.getValueFor(e),va.getValueFor(e))}),al=_t("neutral-stroke-rest").withDefault((e=>ol.getValueFor(e).evaluate(e).rest)),rl=_t("neutral-stroke-hover").withDefault((e=>ol.getValueFor(e).evaluate(e).hover)),ll=_t("neutral-stroke-active").withDefault((e=>ol.getValueFor(e).evaluate(e).active)),il=_t("neutral-stroke-focus").withDefault((e=>ol.getValueFor(e).evaluate(e).focus)),nl=At("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>Nt(Ba.getValueFor(e),t||Xa.getValueFor(e),$a.getValueFor(e),ma.getValueFor(e),xa.getValueFor(e),wa.getValueFor(e),5)}),sl=_t("neutral-stroke-control-rest").withDefault((e=>nl.getValueFor(e).evaluate(e).rest)),cl=_t("neutral-stroke-control-hover").withDefault((e=>nl.getValueFor(e).evaluate(e).hover)),dl=_t("neutral-stroke-control-active").withDefault((e=>nl.getValueFor(e).evaluate(e).active)),ul=_t("neutral-stroke-control-focus").withDefault((e=>nl.getValueFor(e).evaluate(e).focus)),hl=At("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>function(e,t,o){return e.get(e.closestIndexOf(t)+yt(t)*o)}(Ba.getValueFor(e),t||Xa.getValueFor(e),ya.getValueFor(e))}),pl=_t("neutral-stroke-divider-rest").withDefault((e=>hl.getValueFor(e).evaluate(e))),gl=At("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>function(e,t,o,a,r,l,i,n){const s=e.closestIndexOf(t),c=yt(t),d=s+c*o,u=d+c*(a-o),h=d+c*(r-o),p=d+c*(l-o),g=`calc(100% - ${n})`;function b(t,o){const a=e.get(t);if(o){const o=e.get(t+c*i),r=`linear-gradient(${a.toColorString()} ${g}, ${o.toColorString()} ${g}, ${o.toColorString()})`;return Ht.fromObject(a,r)}return a}return{rest:b(d,!0),hover:b(u,!0),active:b(h,!1),focus:b(p,!0)}}(Ba.getValueFor(e),t||Xa.getValueFor(e),$a.getValueFor(e),ma.getValueFor(e),xa.getValueFor(e),wa.getValueFor(e),20,Jt.getValueFor(e)+"px")}),bl=_t("neutral-stroke-input-rest").withDefault((e=>gl.getValueFor(e).evaluate(e).rest)),fl=_t("neutral-stroke-input-hover").withDefault((e=>gl.getValueFor(e).evaluate(e).hover)),vl=_t("neutral-stroke-input-active").withDefault((e=>gl.getValueFor(e).evaluate(e).active)),$l=_t("neutral-stroke-input-focus").withDefault((e=>gl.getValueFor(e).evaluate(e).focus)),ml=At("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>Gt(Ba.getValueFor(e),t||Xa.getValueFor(e),ka.getValueFor(e),Fa.getValueFor(e),Va.getValueFor(e),ka.getValueFor(e))}),xl=_t("neutral-stroke-layer-rest").withDefault((e=>ml.getValueFor(e).evaluate(e).rest)),wl=_t("neutral-stroke-layer-hover").withDefault((e=>ml.getValueFor(e).evaluate(e).hover)),yl=_t("neutral-stroke-layer-active").withDefault((e=>ml.getValueFor(e).evaluate(e).active)),kl=At("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>It(Ba.getValueFor(e),t||Xa.getValueFor(e),5.5,0,Da.getValueFor(e),za.getValueFor(e),Ta.getValueFor(e))}),Fl=_t("neutral-stroke-strong-rest").withDefault((e=>kl.getValueFor(e).evaluate(e).rest)),Vl=_t("neutral-stroke-strong-hover").withDefault((e=>kl.getValueFor(e).evaluate(e).hover)),Dl=_t("neutral-stroke-strong-active").withDefault((e=>kl.getValueFor(e).evaluate(e).active)),zl=_t("neutral-stroke-strong-focus").withDefault((e=>kl.getValueFor(e).evaluate(e).focus)),Tl=At("focus-stroke-outer-recipe").withDefault({evaluate:e=>(Ba.getValueFor(e),wt(Xa.getValueFor(e))?Dt:zt)}),Cl=_t("focus-stroke-outer").withDefault((e=>Tl.getValueFor(e).evaluate(e))),Bl=At("focus-stroke-inner-recipe").withDefault({evaluate:e=>{return Ha.getValueFor(e),t=Xa.getValueFor(e),Cl.getValueFor(e),wt(t)?zt:Dt;var t}}),Ll=_t("focus-stroke-inner").withDefault((e=>Bl.getValueFor(e).evaluate(e))),Hl=At("foreground-on-accent-large-recipe").withDefault({evaluate:e=>Lt(Wa.getValueFor(e),Ya.getValueFor(e),Za.getValueFor(e),Ka.getValueFor(e),qa.large)}),Sl=_t("foreground-on-accent-rest-large").withDefault((e=>Hl.getValueFor(e).evaluate(e).rest)),jl=_t("foreground-on-accent-hover-large").withDefault((e=>Hl.getValueFor(e).evaluate(e,Ya.getValueFor(e)).hover)),Nl=_t("foreground-on-accent-active-large").withDefault((e=>Hl.getValueFor(e).evaluate(e,Za.getValueFor(e)).active)),Il=_t("foreground-on-accent-focus-large").withDefault((e=>Hl.getValueFor(e).evaluate(e,Ka.getValueFor(e)).focus)),Gl=_t("neutral-fill-inverse-rest-delta").withDefault(0),Ol=_t("neutral-fill-inverse-hover-delta").withDefault(-3),Rl=_t("neutral-fill-inverse-active-delta").withDefault(7),Pl=_t("neutral-fill-inverse-focus-delta").withDefault(0);const Ml=At("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>function(e,t,o,a,r,l){const i=yt(t),n=e.closestIndexOf(e.colorContrast(t,14)),s=n+i*Math.abs(o-a);let c,d;return(1===i?o<a:i*o>i*a)?(c=n,d=s):(c=s,d=n),{rest:e.get(c),hover:e.get(d),active:e.get(c+i*r),focus:e.get(c+i*l)}}(Ba.getValueFor(e),t||Xa.getValueFor(e),Gl.getValueFor(e),Ol.getValueFor(e),Rl.getValueFor(e),Pl.getValueFor(e))}),_l=_t("neutral-fill-inverse-rest").withDefault((e=>Ml.getValueFor(e).evaluate(e).rest)),Al=_t("neutral-fill-inverse-hover").withDefault((e=>Ml.getValueFor(e).evaluate(e).hover)),El=_t("neutral-fill-inverse-active").withDefault((e=>Ml.getValueFor(e).evaluate(e).active)),Xl=_t("neutral-fill-inverse-focus").withDefault((e=>Ml.getValueFor(e).evaluate(e).focus)),ql=Zt,Ul=Kt,Wl=Jt,Yl=Qt,Zl=Gl,Kl=Ol,Jl=Rl,Ql=Pl,ei=Jo,ti=da,oi=ua,ai=ha,ri=pa,li=ya,ii=Oa,ni=Pa,si=_a,ci=Ea,di=Qa,ui=Sl,hi=pl,pi=Cr,gi=_l,bi=Al,fi=El,vi=Xl,$i=Xr,mi=qr,xi=Ur,wi=Wr,yi=Cl,ki=Ll,Fi=al,Vi=rl,Di=ll,zi=il,Ti=Ae`
  font-family: ${eo};
  font-size: ${ao};
  line-height: ${ro};
  font-weight: initial;
  font-variation-settings: ${lo};
`,Ci=Ae`
  font-family: ${eo};
  font-size: ${io};
  line-height: ${no};
  font-weight: initial;
  font-variation-settings: ${so};
`,Bi=Ae`
  font-family: ${eo};
  font-size: ${co};
  line-height: ${uo};
  font-weight: initial;
  font-variation-settings: ${ho};
`,Li=Ae`
  font-family: ${eo};
  font-size: ${po};
  line-height: ${go};
  font-weight: initial;
  font-variation-settings: ${bo};
`,Hi=Ae`
  font-family: ${eo};
  font-size: ${fo};
  line-height: ${vo};
  font-weight: initial;
  font-variation-settings: ${$o};
`,Si=Ae`
  font-family: ${eo};
  font-size: ${mo};
  line-height: ${xo};
  font-weight: initial;
  font-variation-settings: ${wo};
`,ji=Ae`
  font-family: ${eo};
  font-size: ${yo};
  line-height: ${ko};
  font-weight: initial;
  font-variation-settings: ${Fo};
`,Ni=Ae`
  font-family: ${eo};
  font-size: ${Vo};
  line-height: ${Do};
  font-weight: initial;
  font-variation-settings: ${zo};
`,Ii=Ae`
  font-family: ${eo};
  font-size: ${To};
  line-height: ${Co};
  font-weight: initial;
  font-variation-settings: ${Bo};
`,Gi=(e,o)=>Ee`
    ${t("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${Ti}
      color: ${Zr};
      gap: calc(${Yt} * 1px);
    }
  `,Oi=Ae`
  outline: calc(${Qt} * 1px) solid ${Cl};
  outline-offset: calc(${Qt} * -1px);
`,Ri=Ae`
  outline: calc(${Qt} * 1px) solid ${Cl};
  outline-offset: calc(${Jt} * 1px);
`,Pi=Ae`(${qt} + ${Wt}) * ${Yt}`,Mi=e.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault((e=>{const t=Tr.getValueFor(e);return Rr.getValueFor(e).evaluate(e,t.evaluate(e).rest).rest})),_i=e.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault((e=>{const t=Tr.getValueFor(e);return Rr.getValueFor(e).evaluate(e,t.evaluate(e).rest).hover})),Ai=e.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault((e=>{const t=Tr.getValueFor(e);return Rr.getValueFor(e).evaluate(e,t.evaluate(e).rest).active})),Ei=(e,r)=>Ee`
    ${t("flex")} :host {
      box-sizing: border-box;
      ${Ti};
      flex-direction: column;
      background: ${Cr};
      color: ${Zr};
      border: calc(${Jt} * 1px) solid ${xl};
      border-radius: calc(${Kt} * 1px);
    }

    .region {
      display: none;
      padding: calc(${Yt} * 2 * 1px);
      background: ${Sr};
    }

    .heading {
      display: grid;
      position: relative;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 2;
      grid-row: 1;
      outline: none;
      margin: calc(${Yt} * 3 * 1px) 0;
      padding: 0 calc(${Yt} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${Jt} * -1px);
      left: calc(${Jt} * -1px);
      right: calc(${Jt} * -1px);
      bottom: calc(${Jt} * -1px);
      cursor: pointer;
    }

    .button:${o}::before {
      ${Oi}
      border-radius: calc(${Kt} * 1px);
    }

    :host(.expanded) .button:${o}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${Jt} * 1px) solid ${xl};
      border-bottom-left-radius: calc((${Kt} - ${Jt}) * 1px);
      border-bottom-right-radius: calc((${Kt} - ${Jt}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${Mi};
      border-radius: calc(${Zt} * 1px);
      fill: currentcolor;
      width: calc(${Pi} * 1px);
      height: calc(${Pi} * 1px);
      margin: calc(${Yt} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${_i};
    }

    .heading:active .icon {
      background: ${Ai};
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host(.expanded) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host(.expanded) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${Yt} * 2 * 1px);
      justify-content: center;
      grid-column: 1;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 3;
    }

    .icon,
    .start,
    .end {
      position: relative;
    }
  `.withBehaviors(a(Ee`
        .button:${o}::before {
          outline-color: ${et.Highlight};
        }
        .icon {
          fill: ${et.ButtonText};
        }
      `)),Xi=r.compose({baseName:"accordion-item",template:l,styles:Ei,collapsedIcon:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  ',expandedIcon:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>\n    </svg>\n  '}),qi=Ei,Ui=i.compose({baseName:"accordion",template:n,styles:Gi}),Wi=Gi;class Yi{constructor(e,t){this.cache=new WeakMap,this.ltr=e,this.rtl=t}bind(e){this.attach(e)}unbind(e){const t=this.cache.get(e);t&&Et.unsubscribe(t)}attach(e){const t=this.cache.get(e)||new Zi(this.ltr,this.rtl,e),o=Et.getValueFor(e);Et.subscribe(t),t.attach(o),this.cache.set(e,t)}}class Zi{constructor(e,t,o){this.ltr=e,this.rtl=t,this.source=o,this.attached=null}handleChange({target:e,token:t}){this.attach(t.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const Ki="0 0 2px rgba(0, 0, 0, 0.14)",Ji="0 calc(var(--elevation) * 0.5px) calc((var(--elevation) * 1px)) rgba(0, 0, 0, 0.2)",Qi=`box-shadow: ${Ki}, ${Ji};`,en=e.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,o)=>{let a=.12,r=.14;t>16&&(a=.2,r=.24);return`${`0 0 2px rgba(0, 0, 0, ${a})`}, ${`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${r})`}`}}),tn=e.create("elevation-shadow-card-rest-size").withDefault(4),on=e.create("elevation-shadow-card-hover-size").withDefault(8),an=e.create("elevation-shadow-card-active-size").withDefault(0),rn=e.create("elevation-shadow-card-focus-size").withDefault(8),ln=e.create("elevation-shadow-card-rest").withDefault((e=>en.getValueFor(e).evaluate(e,tn.getValueFor(e)))),nn=e.create("elevation-shadow-card-hover").withDefault((e=>en.getValueFor(e).evaluate(e,on.getValueFor(e)))),sn=e.create("elevation-shadow-card-active").withDefault((e=>en.getValueFor(e).evaluate(e,an.getValueFor(e)))),cn=e.create("elevation-shadow-card-focus").withDefault((e=>en.getValueFor(e).evaluate(e,rn.getValueFor(e)))),dn=e.create("elevation-shadow-tooltip-size").withDefault(16),un=e.create("elevation-shadow-tooltip").withDefault((e=>en.getValueFor(e).evaluate(e,dn.getValueFor(e)))),hn=e.create("elevation-shadow-flyout-size").withDefault(32),pn=e.create("elevation-shadow-flyout").withDefault((e=>en.getValueFor(e).evaluate(e,hn.getValueFor(e)))),gn=e.create("elevation-shadow-dialog-size").withDefault(128),bn=e.create("elevation-shadow-dialog").withDefault((e=>en.getValueFor(e).evaluate(e,gn.getValueFor(e)))),fn=(e,a,r,l="[disabled]")=>Ee`
    ${t("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Ti}
      height: calc(${Pi} * 1px);
      min-width: calc(${Pi} * 1px);
      color: ${Zr};
      border-radius: calc(${Zt} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${Jt} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${Yt} * 2 * ${Wt})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${o} {
      ${Oi}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,vn=(e,t,r,l="[disabled]")=>Ee`
    .control {
      background: padding-box linear-gradient(${gr}, ${gr}),
        border-box ${sl};
    }

    :host(${r}:hover) .control {
      background: padding-box linear-gradient(${br}, ${br}),
        border-box ${cl};
    }

    :host(${r}:active) .control {
      background: padding-box linear-gradient(${fr}, ${fr}),
        border-box ${dl};
    }

    :host(${l}) .control {
      background: padding-box linear-gradient(${gr}, ${gr}),
        border-box ${al};
    }
  `.withBehaviors(a(Ee`
        .control {
          background: ${et.ButtonFace};
          border-color: ${et.ButtonText};
          color: ${et.ButtonText};
        }

        :host(${r}:hover) .control,
        :host(${r}:active) .control {
          forced-color-adjust: none;
          background: ${et.HighlightText};
          border-color: ${et.Highlight};
          color: ${et.Highlight};
        }

        :host(${l}) .control {
          background: transparent;
          border-color: ${et.GrayText};
          color: ${et.GrayText};
        }

        .control:${o} {
          outline-color: ${et.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${et.LinkText};
          color: ${et.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${et.CanvasText};
          color: ${et.CanvasText};
        }
    `)),$n=(e,t,r,l="[disabled]")=>Ee`
    .control {
      background: padding-box linear-gradient(${Wa}, ${Wa}),
        border-box ${cr};
      color: ${Qa};
    }

    :host(${r}:hover) .control {
      background: padding-box linear-gradient(${Ya}, ${Ya}),
        border-box ${dr};
      color: ${er};
    }

    :host(${r}:active) .control {
      background: padding-box linear-gradient(${Za}, ${Za}),
        border-box ${ur};
      color: ${tr};
    }

    :host(${l}) .control {
      background: ${Wa};
    }

    .control:${o} {
      box-shadow: 0 0 0 calc(${Qt} * 1px) ${Ll} inset !important;
    }
  `.withBehaviors(a(Ee`
        .control {
          forced-color-adjust: none;
          background: ${et.Highlight};
          color: ${et.HighlightText};
        }

        :host(${r}:hover) .control,
        :host(${r}:active) .control {
          background: ${et.HighlightText};
          border-color: ${et.Highlight};
          color: ${et.Highlight};
        }

        :host(${l}) .control {
          background: transparent;
          border-color: ${et.GrayText};
          color: ${et.GrayText};
        }

        .control:${o} {
          outline-color: ${et.CanvasText};
          box-shadow: 0 0 0 calc(${Qt} * 1px) ${et.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${et.LinkText};
          color: ${et.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${et.ButtonFace};
          border-color: ${et.LinkText};
          color: ${et.LinkText};
        }
      `)),mn=(e,t,r,l="[disabled]")=>Ee`
    :host {
      height: auto;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      min-width: 0;
    }

    .control {
      display: inline;
      padding: 0;
      border: none;
      box-shadow: none;
      line-height: 1;
    }

    :host(${r}) .control {
      color: ${rr};
      text-decoration: underline 1px;
    }

    :host(${r}:hover) .control {
      color: ${lr};
      text-decoration: none;
    }

    :host(${r}:active) .control {
      color: ${ir};
      text-decoration: none;
    }

    .control:${o} {
      ${Ri}
    }
  `.withBehaviors(a(Ee`
        :host(${r}) .control {
          color: ${et.LinkText};
        }

        :host(${r}:hover) .control,
        :host(${r}:active) .control {
          color: ${et.CanvasText};
        }

        .control:${o} {
          outline-color: ${et.CanvasText};
        }
      `)),xn=(e,t,r,l="[disabled]")=>Ee`
    :host {
      color: ${rr};
    }

    .control {
      background: ${Pr};
    }

    :host(${r}:hover) .control {
      background: ${Mr};
      color: ${lr};
    }

    :host(${r}:active) .control {
      background: ${_r};
      color: ${ir};
    }

    :host(${l}) .control {
      background: ${Pr};
    }
  `.withBehaviors(a(Ee`
        :host {
          color: ${et.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${r}:hover) .control,
        :host(${r}:active) .control {
          background: transparent;
          border-color: ${et.ButtonText};
          color: ${et.ButtonText};
        }

        :host(${l}) .control {
          background: transparent;
          color: ${et.GrayText};
        }

        .control:${o} {
          outline-color: ${et.CanvasText};
        }

        :host([href]) .control {
          color: ${et.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${et.LinkText};
          color: ${et.LinkText};
        }
      `)),wn=(e,t,r,l="[disabled]")=>Ee`
    .control {
      background: transparent !important;
      border-color: ${al};
    }

    :host(${r}:hover) .control {
      border-color: ${rl};
    }

    :host(${r}:active) .control {
      border-color: ${ll};
    }

    :host(${l}) .control {
      background: transparent !important;
      border-color: ${al};
    }
  `.withBehaviors(a(Ee`
        .control {
          border-color: ${et.ButtonText};
          color: ${et.ButtonText};
        }

        :host(${r}:hover) .control,
        :host(${r}:active) .control {
          background: ${et.HighlightText};
          border-color: ${et.Highlight};
          color: ${et.Highlight};
        }

        :host(${l}) .control {
          border-color: ${et.GrayText};
          color: ${et.GrayText};
        }

        .control:${o} {
          outline-color: ${et.CanvasText};
        }

        :host([href]) .control {
          border-color: ${et.LinkText};
          color: ${et.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${et.CanvasText};
          color: ${et.CanvasText};
        }
      `)),yn=(e,t,r,l="[disabled]")=>Ee`
    .control {
      background: ${Pr};
    }

    :host(${r}:hover) .control {
      background: ${Mr};
    }

    :host(${r}:active) .control {
      background: ${_r};
    }

    :host(${l}) .control {
      background: ${Pr};
    }
  `.withBehaviors(a(Ee`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${et.ButtonText};
        }

        :host(${r}:hover) .control,
        :host(${r}:active) .control {
          background: transparent;
          border-color: ${et.ButtonText};
          color: ${et.ButtonText};
        }

        :host(${l}) .control {
          background: transparent;
          color: ${et.GrayText};
        }
        
        .control:${o} {
          outline-color: ${et.CanvasText};
        }

        :host([href]) .control {
          color: ${et.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${et.LinkText};
          color: ${et.LinkText};
        }
      `)),kn=e.create("input-placeholder-rest").withDefault((e=>{const t=$r.getValueFor(e);return el.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),Fn=e.create("input-placeholder-hover").withDefault((e=>{const t=$r.getValueFor(e);return el.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),Vn=e.create("input-filled-placeholder-rest").withDefault((e=>{const t=jr.getValueFor(e);return el.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),Dn=e.create("input-filled-placeholder-hover").withDefault((e=>{const t=jr.getValueFor(e);return el.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),zn=(e,t,o)=>Ee`
  :host {
    ${Ti}
    color: ${Zr};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${o} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${Jt} * 1px) solid transparent;
    border-radius: calc(${Zt} * 1px);
    height: calc(${Pi} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${Zr};
    cursor: pointer;
    ${Ti}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${o},
  :host([readonly]) ${o},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${s};
  }

  :host([disabled]) {
    opacity: ${Xt};
  }
`,Tn=(e,t,o)=>Ee`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${Qt} * 1px);
      bottom: 0;
      border-bottom: calc(${Qt} * 1px) solid ${Wa};
      border-bottom-left-radius: calc(${Zt} * 1px);
      border-bottom-right-radius: calc(${Zt} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Cn=(e,t,o,a=":not([disabled]):not(:focus-within)")=>Ee`
  ${o} {
    background: padding-box linear-gradient(${mr}, ${mr}),
      border-box ${bl};
  }

  :host(${a}:hover) ${o} {
    background: padding-box linear-gradient(${xr}, ${xr}),
      border-box ${fl};
  }

  :host(:not([disabled]):focus-within) ${o} {
    background: padding-box linear-gradient(${yr}, ${yr}),
      border-box ${bl};
  }
  
  :host([disabled]) ${o} {
    background: padding-box linear-gradient(${mr}, ${mr}),
      border-box ${al};
  }

  .control::placeholder {
    color: ${kn};
  }

  :host(${a}:hover) .control::placeholder {
    color: ${Fn};
  }
`,Bn=(e,t,o,a=":not([disabled]):not(:focus-within)")=>Ee`
  ${o} {
    background: ${Nr};
  }

  :host(${a}:hover) ${o} {
    background: ${Ir};
  }

  :host(:not([disabled]):focus-within) ${o} {
    background: ${Or};
  }

  :host([disabled]) ${o} {
    background: ${Nr};
  }

  .control::placeholder {
    color: ${Vn};
  }

  :host(${a}:hover) .control::placeholder {
    color: ${Dn};
  }
`,Ln=(e,t,o,a=":not([disabled]):not(:focus-within)")=>Ee`
  :host {
    color: ${et.ButtonText};
  }

  ${o} {
    background: ${et.ButtonFace};
    border-color: ${et.ButtonText};
  }

  :host(${a}:hover) ${o},
  :host(:not([disabled]):focus-within) ${o} {
    border-color: ${et.Highlight};
  }

  :host([disabled]) ${o} {
    opacity: 1;
    background: ${et.ButtonFace};
    border-color: ${et.GrayText};
  }

  .control::placeholder,
  :host(${a}:hover) .control::placeholder {
    color: ${et.CanvasText};
  }

  :host(:not([disabled]):focus) ${o} {
    ${Oi}
    outline-color: ${et.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${et.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${et.GrayText};
  }
`;function Hn(e,t){return new c("appearance",e,t)}const Sn="[href]",jn=(e,t)=>fn().withBehaviors(Hn("neutral",vn(0,0,Sn)),Hn("accent",$n(0,0,Sn)),Hn("hypertext",mn(0,0,Sn)),Hn("lightweight",xn(0,0,Sn)),Hn("outline",wn(0,0,Sn)),Hn("stealth",yn(0,0,Sn)));class Nn extends d{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var e,t;const o=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===o.length&&o[0]instanceof SVGElement?null===(e=this.control)||void 0===e||e.classList.add("icon-only"):null===(t=this.control)||void 0===t||t.classList.remove("icon-only")}}bt([Xe],Nn.prototype,"appearance",void 0);const In=jn,Gn=Nn.compose({baseName:"anchor",baseClass:d,template:u,styles:jn,shadowOptions:{delegatesFocus:!0}}),On=(e,t)=>Ee`
  :host {
    contain: layout;
    display: block;
  }
`,Rn=h.compose({baseName:"anchored-region",template:p,styles:On}),Pn=On,Mn=(e,o)=>Ee`
    ${t("inline-block")} :host {
      box-sizing: border-box;
      ${Ci};
    }

    .control {
      border-radius: calc(${Zt} * 1px);
      padding: calc(((${Yt} * 0.5) - ${Jt}) * 1px) calc((${Yt} - ${Jt}) * 1px);
      border: calc(${Jt} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${Zr};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${Wa};
      color: ${Qa};
    }

    :host(.neutral) .control {
      background: ${Nr};
      color: ${Zr};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${no} - calc(${Yt} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class _n extends g{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(e,t){e!==t&&qe.queueUpdate((()=>{this.classList.add(t),this.classList.remove(e)}))}}bt([Xe({mode:"fromView"})],_n.prototype,"appearance",void 0);const An=_n.compose({baseName:"badge",baseClass:g,template:b,styles:Mn}),En=Mn,Xn=(e,o)=>Ee`
  ${t("inline-block")} :host {
    box-sizing: border-box;
    ${Ti};
  }

  .list {
    display: flex;
  }
`,qn=f.compose({baseName:"breadcrumb",template:v,styles:Xn}),Un=Xn,Wn=(e,r)=>Ee`
    ${t("inline-flex")} :host {
      background: transparent;
      color: ${Zr};
      fill: currentcolor;
      box-sizing: border-box;
      ${Ti};
      min-width: calc(${Pi} * 1px);
      border-radius: calc(${Zt} * 1px);
    }

    .listitem {
      display: flex;
      align-items: center;
      border-radius: inherit;
    }

    .control {
      position: relative;
      align-items: center;
      box-sizing: border-box;
      color: inherit;
      fill: inherit;
      cursor: pointer;
      display: flex;
      outline: none;
      text-decoration: none;
      white-space: nowrap;
      border-radius: inherit;
    }

    .control:hover {
      color: ${Kr};
    }

    .control:active {
      color: ${Jr};
    }

    .control:${o} {
      ${Ri}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${Zr};
      fill: currentcolor;
      cursor: default;
    }

    .start {
      display: flex;
      margin-inline-end: 6px;
    }

    .end {
      display: flex;
      margin-inline-start: 6px;
    }

    .separator {
      display: flex;
    }
  `.withBehaviors(a(Ee`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${et.ButtonFace};
          color: ${et.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${et.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${et.ButtonFace};
          color: ${et.LinkText};
        }
        :host([href]) .control:hover {
          background: ${et.LinkText};
          color: ${et.HighlightText};
          fill: currentcolor;
        }
        .control:${o} {
          outline-color: ${et.LinkText};
        }
      `)),Yn=$.compose({baseName:"breadcrumb-item",template:m,styles:Wn,shadowOptions:{delegatesFocus:!0},separator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '}),Zn=Wn,Kn=":not([disabled])",Jn="[disabled]",Qn=(e,t)=>Ee`
    :host(${Kn}) .control {
      cursor: pointer;
    }

    :host(${Jn}) .control {
      cursor: ${s};
    }

    @media (forced-colors: none) {
      :host(${Jn}) .control {
        opacity: ${Xt};
      }
    }

    ${fn(0,0,0,Jn)}
  `.withBehaviors(Hn("neutral",vn(0,0,Kn,Jn)),Hn("accent",$n(0,0,Kn,Jn)),Hn("lightweight",xn(0,0,Kn,Jn)),Hn("outline",wn(0,0,Kn,Jn)),Hn("stealth",yn(0,0,Kn,Jn)));class es extends x{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}bt([Xe],es.prototype,"appearance",void 0);const ts=es.compose({baseName:"button",baseClass:x,template:w,styles:Qn,shadowOptions:{delegatesFocus:!0}}),os=Qn,as=Ee`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,rs=Ee`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`;class ls extends F{constructor(){super(...arguments),this.readonly=!0}}bt([Xe({converter:Ue})],ls.prototype,"readonly",void 0);const is=ls.compose({baseName:"calendar",template:y,styles:(e,o)=>Ee`
${t("inline-block")} :host {
  --calendar-cell-size: calc((${qt} + 2 + ${Wt}) * ${Yt} * 1px);
  --calendar-gap: 2px;
  ${Ti}
  color: ${Zr};
}

.title {
  padding: calc(${Yt} * 2px);
  font-weight: 600;
}

.days {
  text-align: center;
}

.week-days,
.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: var(--calendar-gap);
  border: 0;
  padding: 0;
}

.day,
.week-day {
  border: 0;
  width: var(--calendar-cell-size);
  height: var(--calendar-cell-size);
  line-height: var(--calendar-cell-size);
  padding: 0;
  box-sizing: initial;
}

.week-day {
  font-weight: 600;
}

.day {
  border: calc(${Jt} * 1px) solid transparent;
  border-radius: calc(${Zt} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${tl};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${Jt} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${Wa};
  border: 1px solid ${Wa};
  background: ${Xa};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${Jt} + ${Zt}) * 1px);
  margin-inline-start: calc((${Zt} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${Qa};
}

.today .date {
  color: ${Qa};
  background: ${Wa};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(a(Ee`
          .day.selected {
              color: ${et.Highlight};
          }

          .today .date {
              background: ${et.Highlight};
              color: ${et.HighlightText};
          }
      `),new Yi(as,rs)),title:k}),ns=(e,o)=>Ee`
    ${t("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${Xa};
      color: ${Zr};
      border: calc(${Jt} * 1px) solid ${xl};
      border-radius: calc(${Kt} * 1px);
      box-shadow: ${ln};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(a(Ee`
        :host {
          background: ${et.Canvas};
          color: ${et.CanvasText};
        }
      `));class ss extends V{cardFillColorChanged(e,t){if(t){const e=ht(t);null!==e&&(this.neutralPaletteSource=t,Xa.setValueFor(this,vt.create(e.r,e.g,e.b)))}}neutralPaletteSourceChanged(e,t){if(t){const e=ht(t),o=vt.create(e.r,e.g,e.b);Ba.setValueFor(this,Ft.create(o))}}handleChange(e,t){this.cardFillColor||Xa.setValueFor(this,(t=>Tr.getValueFor(t).evaluate(t,Xa.getValueFor(e)).rest))}connectedCallback(){super.connectedCallback();const e=z(this);if(e){const t=We.getNotifier(e);t.subscribe(this,"fillColor"),t.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}bt([Xe({attribute:"card-fill-color",mode:"fromView"})],ss.prototype,"cardFillColor",void 0),bt([Xe({attribute:"neutral-palette-source",mode:"fromView"})],ss.prototype,"neutralPaletteSource",void 0);const cs=ss.compose({baseName:"card",baseClass:V,template:D,styles:ns}),ds=ns,us=(e,r)=>Ee`
    ${t("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${Pi} / 2 + ${Yt}) * 1px);
      height: calc((${Pi} / 2 + ${Yt}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${Zt} * 1px);
      border: calc(${Jt} * 1px) solid ${Fl};
      background: ${Fr};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Ti}
      color: ${Zr};
      ${""} padding-inline-start: calc(${Yt} * 2px + 2px);
      margin-inline-end: calc(${Yt} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Zr};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${Qa};
    }

    :host(:not(.disabled):hover) .control {
      background: ${Vr};
      border-color: ${Vl};
    }

    :host(:not(.disabled):active) .control {
      background: ${Dr};
      border-color: ${Dl};
    }

    :host(:${o}) .control {
      background: ${zr};
      ${Ri}
    }

    :host(.checked) .control {
      background: ${Wa};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Ya};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Za};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${s};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Xt};
    }
  `.withBehaviors(a(Ee`
        .control {
          border-color: ${et.FieldText};
          background: ${et.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${et.Highlight};
          background: ${et.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${et.FieldText};
        }
        :host(:${o}) .control {
          forced-color-adjust: none;
          outline-color: ${et.FieldText};
          background: ${et.Field};
          border-color: ${et.Highlight};
        }
        :host(.checked) .control {
          background: ${et.Highlight};
          border-color: ${et.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${et.HighlightText};
          border-color: ${et.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${et.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${et.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${et.GrayText};
          background: ${et.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${et.GrayText};
        }
      `)),hs=T.compose({baseName:"checkbox",template:C,styles:us,checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '}),ps=us,gs=".control",bs=":not([disabled]):not([open])",fs="[disabled]",vs=(e,a)=>Ee`
    ${t("inline-flex")}
    
    :host {
      border-radius: calc(${Zt} * 1px);
      box-sizing: border-box;
      color: ${Zr};
      fill: currentcolor;
      font-family: ${eo};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${pn};
      background: ${Xa};
      border-radius: calc(${Kt} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${Pi} * 1px));
      padding: calc((${Yt} - ${Jt} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${Jt} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${Jt} * 1px) solid transparent;
      border-radius: calc(${Zt} * 1px);
      height: calc(${Pi} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${Ti}
      min-height: 100%;
      padding: 0 calc(${Yt} * 2.25px);
      width: 100%;
    }

    :host(:${o}) {
      ${Oi}
    }

    :host([disabled]) .control {
      cursor: ${s};
      opacity: ${Xt};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${Pi} + ${Yt} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${Pi} + ${Yt} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `,$s=(e,t)=>vs().withBehaviors(Hn("outline",vn(0,0,bs,fs)),Hn("filled",Bn(0,0,gs,bs).withBehaviors(a(Ln(0,0,gs,bs)))),Hn("stealth",yn(0,0,bs,fs)),a(Ee`
    :host([open]) .listbox {
      background: ${et.ButtonFace};
      border-color: ${et.CanvasText};
    }
  `)),ms=".control",xs=":not([disabled]):not([open])",ws=(e,t)=>Ee`
    ${vs()}

    ${Tn()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${s};
      user-select: none;
    }

    :host(:active) .selected-value {
      user-select: none;
    }

    .selected-value {
      -webkit-appearance: none;
      background: transparent;
      border: none;
      color: inherit;
      ${Ti}
      height: calc(100% - ${Jt} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(Hn("outline",Cn(0,0,ms,xs)),Hn("filled",Bn(0,0,ms,xs)),a(Ln(0,0,ms,xs)));class ys extends B{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Xa.setValueFor(this.listbox,Ia)}}bt([Xe({mode:"fromView"})],ys.prototype,"appearance",void 0);const ks=ys.compose({baseName:"combobox",baseClass:B,shadowOptions:{delegatesFocus:!0},template:L,styles:ws,indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),Fs=ws,Vs=(e,t)=>Ee`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,Ds=(e,t)=>Ee`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${Jt} * 1px) solid ${pl};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${Xa};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(a(Ee`
        :host {
        }
      `)),zs=(e,t)=>Ee`
    :host {
      padding: calc((${Yt} + ${Qt} - ${Jt}) * 1px) calc(((${Yt} * 3) + ${Qt} - ${Jt}) * 1px);
      color: ${Zr};
      box-sizing: border-box;
      ${Ti}
      border: transparent calc(${Jt} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${Zt} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${o}) {
      ${Oi}
    }
  `.withBehaviors(a(Ee`
        :host {
          forced-color-adjust: none;
          background: ${et.Field};
          color: ${et.FieldText};
        }

        :host(:${o}) {
          outline-color: ${et.FieldText};
        }
      `)),Ts=H.compose({baseName:"data-grid-cell",template:S,styles:zs}),Cs=zs,Bs=j.compose({baseName:"data-grid-row",template:N,styles:Ds}),Ls=Ds,Hs=I.compose({baseName:"data-grid",template:G,styles:Vs}),Ss=Vs,js={toView:e=>null==e?null:null==e?void 0:e.toColorString(),fromView(e){if(null==e)return null;const t=ht(e);return t?vt.create(t.r,t.g,t.b):null}},Ns=Ee`
  :host {
    background-color: ${Xa};
    color: ${Zr};
  }
`.withBehaviors(a(Ee`
      :host {
        background-color: ${et.Canvas};
        box-shadow: 0 0 0 1px ${et.CanvasText};
        color: ${et.CanvasText};
      }
    `));function Is(e){return(t,o)=>{t[o+"Changed"]=function(t,o){null!=o?e.setValueFor(this,o):e.deleteValueFor(this)}}}class Gs extends O{constructor(){super(),this.noPaint=!1;const e={handleChange:this.noPaintChanged.bind(this)};We.getNotifier(this).subscribe(e,"fillColor"),We.getNotifier(this).subscribe(e,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){this.noPaint||void 0===this.fillColor&&!this.baseLayerLuminance?this.$fastController.removeStyles(Ns):this.$fastController.addStyles(Ns)}}bt([Xe({attribute:"no-paint",mode:"boolean"})],Gs.prototype,"noPaint",void 0),bt([Xe({attribute:"fill-color",converter:js,mode:"fromView"}),Is(Xa)],Gs.prototype,"fillColor",void 0),bt([Xe({attribute:"accent-base-color",converter:js,mode:"fromView"}),Is(La)],Gs.prototype,"accentBaseColor",void 0),bt([Xe({attribute:"neutral-base-color",converter:js,mode:"fromView"}),Is(Ca)],Gs.prototype,"neutralBaseColor",void 0),bt([Xe({converter:Ye}),Is(Wt)],Gs.prototype,"density",void 0),bt([Xe({attribute:"design-unit",converter:Ye}),Is(Yt)],Gs.prototype,"designUnit",void 0),bt([Xe({attribute:"direction"}),Is(Et)],Gs.prototype,"direction",void 0),bt([Xe({attribute:"base-height-multiplier",converter:Ye}),Is(qt)],Gs.prototype,"baseHeightMultiplier",void 0),bt([Xe({attribute:"base-horizontal-spacing-multiplier",converter:Ye}),Is(Ut)],Gs.prototype,"baseHorizontalSpacingMultiplier",void 0),bt([Xe({attribute:"control-corner-radius",converter:Ye}),Is(Zt)],Gs.prototype,"controlCornerRadius",void 0),bt([Xe({attribute:"layer-corner-radius",converter:Ye}),Is(Kt)],Gs.prototype,"layerCornerRadius",void 0),bt([Xe({attribute:"stroke-width",converter:Ye}),Is(Jt)],Gs.prototype,"strokeWidth",void 0),bt([Xe({attribute:"focus-stroke-width",converter:Ye}),Is(Qt)],Gs.prototype,"focusStrokeWidth",void 0),bt([Xe({attribute:"disabled-opacity",converter:Ye}),Is(Xt)],Gs.prototype,"disabledOpacity",void 0),bt([Xe({attribute:"type-ramp-minus-2-font-size"}),Is(co)],Gs.prototype,"typeRampMinus2FontSize",void 0),bt([Xe({attribute:"type-ramp-minus-2-line-height"}),Is(uo)],Gs.prototype,"typeRampMinus2LineHeight",void 0),bt([Xe({attribute:"type-ramp-minus-1-font-size"}),Is(io)],Gs.prototype,"typeRampMinus1FontSize",void 0),bt([Xe({attribute:"type-ramp-minus-1-line-height"}),Is(no)],Gs.prototype,"typeRampMinus1LineHeight",void 0),bt([Xe({attribute:"type-ramp-base-font-size"}),Is(ao)],Gs.prototype,"typeRampBaseFontSize",void 0),bt([Xe({attribute:"type-ramp-base-line-height"}),Is(ro)],Gs.prototype,"typeRampBaseLineHeight",void 0),bt([Xe({attribute:"type-ramp-plus-1-font-size"}),Is(po)],Gs.prototype,"typeRampPlus1FontSize",void 0),bt([Xe({attribute:"type-ramp-plus-1-line-height"}),Is(go)],Gs.prototype,"typeRampPlus1LineHeight",void 0),bt([Xe({attribute:"type-ramp-plus-2-font-size"}),Is(fo)],Gs.prototype,"typeRampPlus2FontSize",void 0),bt([Xe({attribute:"type-ramp-plus-2-line-height"}),Is(vo)],Gs.prototype,"typeRampPlus2LineHeight",void 0),bt([Xe({attribute:"type-ramp-plus-3-font-size"}),Is(mo)],Gs.prototype,"typeRampPlus3FontSize",void 0),bt([Xe({attribute:"type-ramp-plus-3-line-height"}),Is(xo)],Gs.prototype,"typeRampPlus3LineHeight",void 0),bt([Xe({attribute:"type-ramp-plus-4-font-size"}),Is(yo)],Gs.prototype,"typeRampPlus4FontSize",void 0),bt([Xe({attribute:"type-ramp-plus-4-line-height"}),Is(ko)],Gs.prototype,"typeRampPlus4LineHeight",void 0),bt([Xe({attribute:"type-ramp-plus-5-font-size"}),Is(Vo)],Gs.prototype,"typeRampPlus5FontSize",void 0),bt([Xe({attribute:"type-ramp-plus-5-line-height"}),Is(Do)],Gs.prototype,"typeRampPlus5LineHeight",void 0),bt([Xe({attribute:"type-ramp-plus-6-font-size"}),Is(To)],Gs.prototype,"typeRampPlus6FontSize",void 0),bt([Xe({attribute:"type-ramp-plus-6-line-height"}),Is(Co)],Gs.prototype,"typeRampPlus6LineHeight",void 0),bt([Xe({attribute:"accent-fill-rest-delta",converter:Ye}),Is(Ho)],Gs.prototype,"accentFillRestDelta",void 0),bt([Xe({attribute:"accent-fill-hover-delta",converter:Ye}),Is(So)],Gs.prototype,"accentFillHoverDelta",void 0),bt([Xe({attribute:"accent-fill-active-delta",converter:Ye}),Is(jo)],Gs.prototype,"accentFillActiveDelta",void 0),bt([Xe({attribute:"accent-fill-focus-delta",converter:Ye}),Is(No)],Gs.prototype,"accentFillFocusDelta",void 0),bt([Xe({attribute:"accent-foreground-rest-delta",converter:Ye}),Is(Io)],Gs.prototype,"accentForegroundRestDelta",void 0),bt([Xe({attribute:"accent-foreground-hover-delta",converter:Ye}),Is(Go)],Gs.prototype,"accentForegroundHoverDelta",void 0),bt([Xe({attribute:"accent-foreground-active-delta",converter:Ye}),Is(Oo)],Gs.prototype,"accentForegroundActiveDelta",void 0),bt([Xe({attribute:"accent-foreground-focus-delta",converter:Ye}),Is(Ro)],Gs.prototype,"accentForegroundFocusDelta",void 0),bt([Xe({attribute:"neutral-fill-rest-delta",converter:Ye}),Is(Po)],Gs.prototype,"neutralFillRestDelta",void 0),bt([Xe({attribute:"neutral-fill-hover-delta",converter:Ye}),Is(Mo)],Gs.prototype,"neutralFillHoverDelta",void 0),bt([Xe({attribute:"neutral-fill-active-delta",converter:Ye}),Is(_o)],Gs.prototype,"neutralFillActiveDelta",void 0),bt([Xe({attribute:"neutral-fill-focus-delta",converter:Ye}),Is(Ao)],Gs.prototype,"neutralFillFocusDelta",void 0),bt([Xe({attribute:"neutral-fill-input-rest-delta",converter:Ye}),Is(Eo)],Gs.prototype,"neutralFillInputRestDelta",void 0),bt([Xe({attribute:"neutral-fill-input-hover-delta",converter:Ye}),Is(Xo)],Gs.prototype,"neutralFillInputHoverDelta",void 0),bt([Xe({attribute:"neutral-fill-input-active-delta",converter:Ye}),Is(qo)],Gs.prototype,"neutralFillInputActiveDelta",void 0),bt([Xe({attribute:"neutral-fill-input-focus-delta",converter:Ye}),Is(Uo)],Gs.prototype,"neutralFillInputFocusDelta",void 0),bt([Xe({attribute:"neutral-fill-layer-rest-delta",converter:Ye}),Is(Jo)],Gs.prototype,"neutralFillLayerRestDelta",void 0),bt([Xe({attribute:"neutral-fill-stealth-rest-delta",converter:Ye}),Is(ia)],Gs.prototype,"neutralFillStealthRestDelta",void 0),bt([Xe({attribute:"neutral-fill-stealth-hover-delta",converter:Ye}),Is(na)],Gs.prototype,"neutralFillStealthHoverDelta",void 0),bt([Xe({attribute:"neutral-fill-stealth-active-delta",converter:Ye}),Is(sa)],Gs.prototype,"neutralFillStealthActiveDelta",void 0),bt([Xe({attribute:"neutral-fill-stealth-focus-delta",converter:Ye}),Is(ca)],Gs.prototype,"neutralFillStealthFocusDelta",void 0),bt([Xe({attribute:"neutral-fill-strong-hover-delta",converter:Ye}),Is(ua)],Gs.prototype,"neutralFillStrongHoverDelta",void 0),bt([Xe({attribute:"neutral-fill-strong-active-delta",converter:Ye}),Is(ha)],Gs.prototype,"neutralFillStrongActiveDelta",void 0),bt([Xe({attribute:"neutral-fill-strong-focus-delta",converter:Ye}),Is(pa)],Gs.prototype,"neutralFillStrongFocusDelta",void 0),bt([Xe({attribute:"base-layer-luminance",converter:Ye}),Is(Lo)],Gs.prototype,"baseLayerLuminance",void 0),bt([Xe({attribute:"neutral-stroke-divider-rest-delta",converter:Ye}),Is(ya)],Gs.prototype,"neutralStrokeDividerRestDelta",void 0),bt([Xe({attribute:"neutral-stroke-rest-delta",converter:Ye}),Is(ga)],Gs.prototype,"neutralStrokeRestDelta",void 0),bt([Xe({attribute:"neutral-stroke-hover-delta",converter:Ye}),Is(ba)],Gs.prototype,"neutralStrokeHoverDelta",void 0),bt([Xe({attribute:"neutral-stroke-active-delta",converter:Ye}),Is(fa)],Gs.prototype,"neutralStrokeActiveDelta",void 0),bt([Xe({attribute:"neutral-stroke-focus-delta",converter:Ye}),Is(va)],Gs.prototype,"neutralStrokeFocusDelta",void 0);const Os=Gs.compose({baseName:"design-system-provider",template:Ze` <slot></slot> `,styles:Ee`
    ${t("block")}
  `}),Rs=(e,t)=>Ee`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${bn};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${Kt} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${Xa};
    z-index: 1;
    border: calc(${Jt} * 1px) solid transparent;
  }
`,Ps=R.compose({baseName:"dialog",template:P,styles:Rs}),Ms=Rs,_s=(e,o)=>Ee`
    ${t("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${Jt} * 1px) solid ${pl};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${Yt} * 1px);
      border-left: calc(${Jt} * 1px) solid ${pl};
  }
  `,As=M.compose({baseName:"divider",template:_,styles:_s}),Es=_s,Xs=(e,r)=>Ee`
    ${t("inline-flex")} :host {
      height: calc((${Pi} + ${Yt}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${Xr};
      background: padding-box linear-gradient(${gr}, ${gr}),
        border-box ${sl};
      box-sizing: border-box;
      border: calc(${Jt} * 1px) solid transparent;
      border-radius: calc(${Zt} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${Xt};
      cursor: ${s};
      pointer-events: none;
    }

    .next,
    .previous {
      display: flex;
    }

    :host(:not(.disabled):hover) {
      cursor: pointer;
    }

    :host(:not(.disabled):hover) {
      color: ${qr};
    }

    :host(:not(.disabled):active) {
      color: ${Ur};
    }

    :host(:${o}) {
      ${Oi}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(a(Ee`
        :host {
          background: ${et.ButtonFace};
          border-color: ${et.ButtonText};
        }
        :host .next,
        :host .previous {
          color: ${et.ButtonText};
          fill: currentcolor;
        }
        :host(:not(.disabled):hover) {
          background: ${et.Highlight};
        }
        :host(:not(.disabled):hover) .next,
        :host(:not(.disabled):hover) .previous {
          color: ${et.HighlightText};
          fill: currentcolor;
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled),
        :host(.disabled) .next,
        :host(.disabled) .previous {
          border-color: ${et.GrayText};
          color: ${et.GrayText};
          fill: currentcolor;
        }
        :host(:${o}) {
          forced-color-adjust: none;
          outline-color: ${et.Highlight};
        }
      `)),qs=A.compose({baseName:"flipper",template:E,styles:Xs,next:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>\n    </svg>\n  ',previous:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>\n    </svg>\n  '}),Us=Xs,Ws=Ee`
  .scroll-prev {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before,
  .scroll-next .scroll-action {
    left: auto;
    right: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-next));
  }

  .scroll-next .scroll-action {
    transform: translate(50%, -50%);
  }
`,Ys=Ee`
  .scroll.scroll-next {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, var(--scroll-fade-next), transparent);
    left: auto;
    right: 0;
  }

  .scroll.scroll-prev::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
  }

  .scroll-prev .scroll-action {
    left: auto;
    right: 0;
    transform: translate(50%, -50%);
  }
`,Zs=Ee`
  .scroll-area {
    position: relative;
  }

  div.scroll-view {
    overflow-x: hidden;
  }

  .scroll {
    bottom: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    user-select: none;
    width: 100px;
  }

  .scroll.disabled {
    display: none;
  }

  .scroll::before,
  .scroll-action {
    left: 0;
    position: absolute;
  }

  .scroll::before {
    background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }

  .scroll-action {
    pointer-events: auto;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ::slotted(fluent-flipper) {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .scroll-area:hover ::slotted(fluent-flipper) {
    opacity: 1;
  }
`.withBehaviors(new Yi(Ws,Ys)),Ks=(e,o)=>Ee`
  ${t("block")} :host {
    --scroll-align: center;
    --scroll-item-spacing: 4px;
    contain: layout;
    position: relative;
  }

  .scroll-view {
    overflow-x: auto;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .content-container {
    align-items: var(--scroll-align);
    display: inline-flex;
    flex-wrap: nowrap;
    position: relative;
  }

  .content-container ::slotted(*) {
    margin-right: var(--scroll-item-spacing);
  }

  .content-container ::slotted(*:last-child) {
    margin-right: 0;
  }
`;class Js extends X{connectedCallback(){super.connectedCallback(),"mobile"!==this.view&&this.$fastController.addStyles(Zs)}}const Qs=Js.compose({baseName:"horizontal-scroll",baseClass:X,template:q,styles:Ks,nextFlipper:Ze`
    <fluent-flipper @click="${e=>e.scrollToNext()}" aria-hidden="${e=>e.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:Ze`
    <fluent-flipper
      @click="${e=>e.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${e=>e.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),ec=Ks,tc=(e,o)=>Ee`
    ${t("inline-flex")} :host {
      border: calc(${Jt} * 1px) solid ${al};
      border-radius: calc(${Zt} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${Yt} * 1px) 0;
    }

    ::slotted(${e.tagFor(U)}) {
      margin: 0 calc(${Yt} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Oi}
    }
  `;class oc extends Y{}const ac=oc.compose({baseName:"listbox",template:W,styles:tc}),rc=tc,lc=(e,r)=>Ee`
    ${t("inline-flex")} :host {
      position: relative;
      ${Ti}
      background: ${Pr};
      border-radius: calc(${Zt} * 1px);
      border: calc(${Jt} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Zr};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${Pi} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${Yt} * 3) - ${Jt} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Qt} - ${Jt}) * 1px);
      top: calc((${Pi} / 4) - ${Qt} * 1px);
      width: 3px;
      height: calc((${Pi} / 2) * 1px);
      background: transparent;
      border-radius: calc(${Zt} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Mr};
    }

    :host(:not([disabled]):active) {
      background: ${_r};
    }

    :host(:not([disabled]):active)::before {
      background: ${Wa};
      height: calc(((${Pi} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${Wa};
    }

    :host(:${o}) {
      ${Oi}
      background: ${Ar};
    }

    :host([aria-selected='true']) {
      background: ${Nr};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${Ir};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${Gr};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Mr};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${_r};
    }

    :host([disabled]) {
      cursor: ${s};
      opacity: ${Xt};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(new Yi(null,Ee`
      :host::before {
        right: calc((${Qt} - ${Jt}) * 1px);
      }
    `),a(Ee`
        :host {
          background: ${et.ButtonFace};
          border-color: ${et.ButtonFace};
          color: ${et.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${et.Highlight};
          color: ${et.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${et.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${et.Canvas};
          color: ${et.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${o}) {
          outline-color: ${et.CanvasText};
        }
      `)),ic=U.compose({baseName:"option",template:Z,styles:lc}),nc=lc,sc=(e,o)=>Ee`
    ${t("block")} :host {
      background: ${Ia};
      border: calc(${Jt} * 1px) solid transparent;
      border-radius: calc(${Kt} * 1px);
      box-shadow: ${pn};
      padding: calc((${Yt} - ${Jt}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${Yt} * 2px);
    }

    ::slotted(${e.tagFor(K)}) {
      margin: 0 calc(${Yt} * 1px);
    }

    ::slotted(${e.tagFor(M)}) {
      margin: calc(${Yt} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${Yt} * 1px) 0;
      border: none;
      border-top: calc(${Jt} * 1px) solid ${pl};
    }
  `.withBehaviors(a(Ee`
        :host([slot='submenu']) {
          background: ${et.Canvas};
          border-color: ${et.CanvasText};
        }
      `));class cc extends J{connectedCallback(){super.connectedCallback(),Xa.setValueFor(this,Ia)}}const dc=cc.compose({baseName:"menu",baseClass:J,template:Q,styles:sc}),uc=sc,hc=(e,r)=>Ee`
    ${t("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Ti}
      box-sizing: border-box;
      height: calc(${Pi} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${Zr};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${Zt} * 1px);
      border: calc(${Jt} * 1px) solid transparent;
      position: relative;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${o}) {
      ${Oi}
    }

    :host(:not([disabled]):hover) {
      background: ${Mr};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${_r};
      color: ${Zr};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${s};
      opacity: ${Xt};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${tl};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(a(Ee`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${et.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${et.Highlight};
          color: ${et.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${o}) ::slotted([slot='end']:not(svg)) {
          color: ${et.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${et.Highlight};
          color: ${et.HighlightText};
        }
        :host(:${o}) {
          background: ${et.Highlight};
          outline-color: ${et.ButtonText};
          color: ${et.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${o}) {
          background: ${et.ButtonFace};
          color: ${et.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${o}) {
          outline-color: ${et.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${et.ButtonText};
          background: ${et.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${et.HighlightText};
          border-color: ${et.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${o}) .expanded-toggle,
            :host(:${o}) .checkbox,
            :host(:${o}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${o}) .checkbox,
            :host([checked]:${o}) .radio {
          border-color: ${et.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${et.Highlight};
          color: ${et.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${et.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${et.Highlight};
        }
      `),new Yi(Ee`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,Ee`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),pc=K.compose({baseName:"menu-item",template:ee,styles:hc,checkboxIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  ',radioIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="2"/>\n    </svg>\n  '}),gc=hc,bc=".root",fc=(e,o)=>Ee`
    ${t("inline-block")}

    ${zn(0,0,bc)}

    ${Tn()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Yt} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      margin: auto;
      fill: currentcolor;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }

    .controls {
      opacity: 0;
      position: relative;
      top: -1px;
      z-index: 3;
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
      opacity: 1;
    }

    .step-up,
    .step-down {
      display: flex;
      padding: 0 8px;
      cursor: pointer;
    }

    .step-up {
      padding-top: 3px;
    }
  `.withBehaviors(Hn("outline",Cn(0,0,bc)),Hn("filled",Bn(0,0,bc)),a(Ln(0,0,bc)));class vc extends te{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}bt([Xe],vc.prototype,"appearance",void 0);const $c=fc,mc=vc.compose({baseName:"number-field",baseClass:te,styles:fc,template:oe,shadowOptions:{delegatesFocus:!0},stepDownGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  ',stepUpGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>\n    </svg>\n'}),xc=(e,o)=>Ee`
    ${t("flex")} :host {
      align-items: center;
      height: calc((${Jt} * 3) * 1px);
    }

    .progress {
      background-color: ${Fl};
      border-radius: calc(${Yt} * 1px);
      width: 100%;
      height: calc(${Jt} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${Wa};
      border-radius: calc(${Yt} * 1px);
      height: calc((${Jt} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${Jt} * 3) * 1px);
      border-radius: calc(${Yt} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${Wa};
      border-radius: calc(${Yt} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${Wa};
      border-radius: calc(${Yt} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${tl};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${tl};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(a(Ee`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${et.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${et.GrayText};
        }
      `));class wc extends re{}const yc=wc.compose({baseName:"progress",template:ae,styles:xc,indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n  '}),kc=xc,Fc=(e,o)=>Ee`
    ${t("flex")} :host {
      align-items: center;
      height: calc(${Pi} * 1px);
      width: calc(${Pi} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${Wa};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${Wa};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${tl};
    }

    :host(.paused) .determinate {
      stroke: ${tl};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors(a(Ee`
        .background {
          stroke: ${et.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${et.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${et.GrayText};
        }
      `));class Vc extends re{}const Dc=Vc.compose({baseName:"progress-ring",template:le,styles:Fc,indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '}),zc=Fc,Tc=(e,r)=>Ee`
    ${t("inline-flex")} :host {
      --input-size: calc((${Pi} / 2) + ${Yt});
      align-items: center;
      outline: none;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${Jt} * 1px) solid ${Fl};
      background: ${Fr};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Ti}
      color: ${Zr};
      ${""} padding-inline-start: calc(${Yt} * 2px + 2px);
      margin-inline-end: calc(${Yt} * 2px + 2px);
      cursor: pointer;
    }

    .control,
    slot[name='checked-indicator'] {
      flex-shrink: 0;
    }

    slot[name='checked-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${Qa};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${Vr};
      border-color: ${Vl};
    }

    :host(:not(.disabled):active) .control {
      background: ${Dr};
      border-color: ${Dl};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${o}) .control {
      ${Ri}
      background: ${zr};
    }

    :host(.checked) .control {
      background: ${Wa};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Ya};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Za};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${s};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Xt};
    }
  `.withBehaviors(a(Ee`
        .control {
          background: ${et.Field};
          border-color: ${et.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${et.Highlight};
        }
        :host(:${o}) .control {
          forced-color-adjust: none;
          background: ${et.Field};
          outline-color: ${et.FieldText};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${et.Highlight};
          background: ${et.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${et.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${et.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${et.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${et.Field};
          border-color: ${et.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${et.GrayText};
        }
      `)),Cc=ie.compose({baseName:"radio",template:ne,styles:Tc,checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="4"/>\n    </svg>\n  '}),Bc=Tc,Lc=(e,o)=>Ee`
  ${t("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`,Hc=se.compose({baseName:"radio-group",template:ce,styles:Lc}),Sc=Lc,jc=(e,t)=>Ze`
  <template
    class="
            ${e=>e.readOnly?"readonly":""}
        "
  >
    <label
      part="label"
      for="control"
      class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
    >
      <slot ${Ke({property:"defaultSlottedNodes",filter:de})}></slot>
    </label>
    <div class="root" part="root" ${Je("root")}>
      ${ue(e,t)}
      <div class="input-wrapper" part="input-wrapper">
        <input
          class="control"
          part="control"
          id="control"
          @input="${e=>e.handleTextInput()}"
          @change="${e=>e.handleChange()}"
          ?autofocus="${e=>e.autofocus}"
          ?disabled="${e=>e.disabled}"
          list="${e=>e.list}"
          maxlength="${e=>e.maxlength}"
          minlength="${e=>e.minlength}"
          pattern="${e=>e.pattern}"
          placeholder="${e=>e.placeholder}"
          ?readonly="${e=>e.readOnly}"
          ?required="${e=>e.required}"
          size="${e=>e.size}"
          ?spellcheck="${e=>e.spellcheck}"
          :value="${e=>e.value}"
          type="search"
          aria-atomic="${e=>e.ariaAtomic}"
          aria-busy="${e=>e.ariaBusy}"
          aria-controls="${e=>e.ariaControls}"
          aria-current="${e=>e.ariaCurrent}"
          aria-describedby="${e=>e.ariaDescribedby}"
          aria-details="${e=>e.ariaDetails}"
          aria-disabled="${e=>e.ariaDisabled}"
          aria-errormessage="${e=>e.ariaErrormessage}"
          aria-flowto="${e=>e.ariaFlowto}"
          aria-haspopup="${e=>e.ariaHaspopup}"
          aria-hidden="${e=>e.ariaHidden}"
          aria-invalid="${e=>e.ariaInvalid}"
          aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
          aria-label="${e=>e.ariaLabel}"
          aria-labelledby="${e=>e.ariaLabelledby}"
          aria-live="${e=>e.ariaLive}"
          aria-owns="${e=>e.ariaOwns}"
          aria-relevant="${e=>e.ariaRelevant}"
          aria-roledescription="${e=>e.ariaRoledescription}"
          ${Je("control")}
        />
        <slot name="clear-button">
          <button
            class="clear-button ${e=>e.value?"":"clear-button__hidden"}"
            part="clear-button"
            tabindex="-1"
            @click=${e=>e.handleClearInput()}
          >
            <slot name="clear-glyph">
              <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2.09 2.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 1 1 .7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 0 1-.7-.7L5.29 6 2.15 2.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
                />
              </svg>
            </slot>
          </button>
        </slot>
      </div>
      ${he(e,t)}
    </div>
  </template>
`,Nc=".root",Ic=e.create("clear-button-hover").withDefault((e=>{const t=Rr.getValueFor(e),o=$r.getValueFor(e);return t.evaluate(e,o.evaluate(e).focus).hover})),Gc=e.create("clear-button-active").withDefault((e=>{const t=Rr.getValueFor(e),o=$r.getValueFor(e);return t.evaluate(e,o.evaluate(e).focus).active})),Oc=(e,o)=>Ee`
    ${t("inline-block")}

    ${zn(0,0,Nc)}

    ${Tn()}

    .root {
      display: flex;
      flex-direction: row;
    }
    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Yt} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    .clear-button {
      display: inline-flex;
      align-items: center;
      margin: 1px;
      height: calc(100% - 2px);
      opacity: 0;
      background: transparent;
      color: ${Zr};
      fill: currentcolor;
      border: none;
      border-radius: calc(${Zt} * 1px);
      min-width: calc(${Pi} * 1px);
      ${Ti}
      outline: none;
      padding: 0 calc((10 + (${Yt} * 2 * ${Wt})) * 1px);
    }
    .clear-button:hover {
      background: ${Ic};
    }
    .clear-button:active {
      background: ${Gc};
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
        opacity: 1;
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
        opacity: 0;
    }
    .control::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    .input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }
    .start,
    .end {
      display: flex;
      margin: 1px;
      align-items: center;
    }
    .start {
      display: flex;
      margin-inline-start: 11px;
    }
    ::slotted([slot="end"]) {
      height: 100%
    }
    .clear-button__hidden {
      opacity: 0;
    }
    .end {
        margin-inline-end: 11px;
    }
    ::slotted(${e.tagFor(x)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(Hn("outline",Cn(0,0,Nc)),Hn("filled",Bn(0,0,Nc)),a(Ln(0,0,Nc)));class Rc extends pe{constructor(){super(...arguments),this.appearance="outline"}}bt([Xe],Rc.prototype,"appearance",void 0);const Pc=Rc.compose({baseName:"search",baseClass:pe,template:jc,styles:Oc,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}}),Mc=Oc;class _c extends ge{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&Xa.setValueFor(this.listbox,Ia)}}bt([Xe({mode:"fromView"})],_c.prototype,"appearance",void 0);const Ac=_c.compose({baseName:"select",baseClass:ge,template:be,styles:$s,indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),Ec=$s,Xc=(e,o)=>Ee`
    ${t("block")} :host {
      --skeleton-fill-default: ${Nr};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${Ir} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${Zt} * 1px);
    }

    :host(.circle) {
      border-radius: 100%;
      overflow: hidden;
    }

    object {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: 2;
    }

    object img {
      width: 100%;
      height: auto;
    }

    ${t("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${Nr});
      animation: shimmer 2s infinite;
      animation-timing-function: var(--skeleton-animation-timing, var(--skeleton-timing-default));
      animation-direction: normal;
      z-index: 1;
    }

    ::slotted(svg) {
      z-index: 2;
    }

    ::slotted(.pattern) {
      width: 100%;
      height: 100%;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `.withBehaviors(a(Ee`
        :host{
          background-color: ${et.CanvasText};
        }
      `)),qc=fe.compose({baseName:"skeleton",template:ve,styles:Xc}),Uc=Xc,Wc=(e,r)=>Ee`
    ${t("inline-grid")} :host {
      --thumb-size: calc((${Pi} / 2) + ${Yt} + (${Jt} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${Yt} / 2) * -1);
      --track-width: ${Yt};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${Zt} * 1px);
      outline: none;
      cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      height: 100%;
      grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(:${o}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${Xa}, 0 0 0 4px ${Cl};
    }
    .thumb-container {
      position: absolute;
      height: calc(var(--thumb-size) * 1px);
      width: calc(var(--thumb-size) * 1px);
      transition: all 0.2s ease;
    }
    .thumb-cursor {
      display: flex;
      position: relative;
      border: none;
      width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
      background: padding-box linear-gradient(${gr}, ${gr}),
        border-box ${sl};
      border: calc(${Jt} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${Wa};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${Ya};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Za};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${gr}, ${gr}),
        border-box ${cl};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${gr}, ${gr}),
        border-box ${dl};
    }
    .track-start {
      background: ${Wa};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${Zt} * 1px);
    }
    :host(.horizontal) .thumb-container {
      transform: translateX(calc(var(--thumb-size) * 0.5px)) translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
      transform: translateX(calc(var(--thumb-translate) * 1px)) translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host(.horizontal) {
      min-width: calc(var(--thumb-size) * 1px);
    }
    :host(.horizontal) .track {
      right: calc(var(--track-overhang) * 1px);
      left: calc(var(--track-overhang) * 1px);
      align-self: start;
      height: calc(var(--track-width) * 1px);
    }
    :host(.vertical) .track {
      top: calc(var(--track-overhang) * 1px);
      bottom: calc(var(--track-overhang) * 1px);
      width: calc(var(--track-width) * 1px);
      height: 100%;
    }
    .track {
      background: ${Xr};
      border: 1px solid ${Fl};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${Yt} * 60px);
      min-width: calc(${Yt} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${s};
    }
    :host(.disabled) {
      opacity: ${Xt};
    }
  `.withBehaviors(a(Ee`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${et.FieldText};
          background: ${et.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${et.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${et.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${et.Field};
        }
        :host(:${o}) .thumb-cursor {
          background: ${et.Highlight};
          border-color: ${et.Highlight};
          box-shadow: 0 0 0 1px ${et.Field}, 0 0 0 3px ${et.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${et.GrayText};
        }
      `)),Yc=$e.compose({baseName:"slider",template:me,styles:Wc,thumb:'\n    <div class="thumb-cursor"></div>\n  '}),Zc=Wc,Kc=(e,o)=>Ee`
    ${t("block")} :host {
      ${Ci}
    }
    .root {
      position: absolute;
      display: grid;
    }
    :host(.horizontal) {
      align-self: start;
      grid-row: 2;
      margin-top: -4px;
    }
    :host(.vertical) {
      justify-self: start;
      grid-column: 2;
      margin-left: 2px;
    }
    .container {
      display: grid;
      justify-self: center;
    }
    :host(.horizontal) .container {
      grid-template-rows: auto auto;
      grid-template-columns: 0;
    }
    :host(.vertical) .container {
      grid-template-columns: auto auto;
      grid-template-rows: 0;
      min-width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
    }
    .label {
      justify-self: center;
      align-self: center;
      white-space: nowrap;
      max-width: 30px;
      margin: 2px 0;
    }
    .mark {
      width: calc(${Jt} * 1px);
      height: calc(${Yt} * 1px);
      background: ${Fl};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${Yt} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${Xt};
    }
  `.withBehaviors(a(Ee`
        .mark {
          forced-color-adjust: none;
          background: ${et.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${et.GrayText};
        }
        :host(.disabled) .mark {
          background: ${et.GrayText};
        }
      `)),Jc=xe.compose({baseName:"slider-label",template:we,styles:Kc}),Qc=Kc,ed=(e,r)=>Ee`
    :host([hidden]) {
      display: none;
    }

    ${t("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${eo};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${Xt};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${s};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${Pi} / 2) + ${Yt}) * 2px);
      height: calc(((${Pi} / 2) + ${Yt}) * 1px);
      background: ${Fr};
      border-radius: calc(${Pi} * 1px);
      border: calc(${Jt} * 1px) solid ${Fl};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${Vr};
      border-color: ${Vl};
    }

    :host(:not(.disabled):active) .switch {
      background: ${Dr};
      border-color: ${Dl};
    }

    :host(:${o}) .switch {
      ${Ri}
      background: ${zr};
    }

    :host(.checked) .switch {
      background: ${Wa};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Ya};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Za};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${Zr};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Zr};
      cursor: pointer;
      ${Ti}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Zr};
      ${Ti}
      margin-inline-end: calc(${Yt} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${Yt} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${Wa};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Qa};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Ya};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${er};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Za};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${tr};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new Yi(Ee`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,Ee`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),a(Ee`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${et.FieldText};
        }
        .switch {
          background: ${et.Field};
          border-color: ${et.FieldText};
        }
        :host(.checked) .switch {
          background: ${et.Highlight};
          border-color: ${et.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${et.HighlightText};
          border-color: ${et.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${et.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${et.Highlight};
        }
        :host(:${o}) .switch {
          forced-color-adjust: none;
          background: ${et.Field}; 
          border-color: ${et.Highlight};
          outline-color: ${et.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${et.GrayText};
        }
        :host(.disabled) .switch {
          background: ${et.Field};
          border-color: ${et.GrayText};
        }
        .status-message,
        .label {
          color: ${et.FieldText};
        }
      `)),td=ye.compose({baseName:"switch",template:ke,styles:ed,switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '}),od=ed,ad=(e,o)=>Ee`
      ${t("grid")} :host {
        box-sizing: border-box;
        ${Ti}
        color: ${Zr};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${Pi} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${Zt} * 1px);
        justify-self: center;
        background: ${Wa};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${Qt} * 1px);
        border-radius: calc(${Zt} * 1px);
        align-self: center;
        background: ${Wa};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(a(Ee`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${et.Highlight};
        }
      `)),rd=(e,r)=>Ee`
      ${t("inline-flex")} :host {
        box-sizing: border-box;
        ${Ti}
        height: calc((${Pi} + (${Yt} * 2)) * 1px);
        padding: 0 calc((6 + (${Yt} * 2 * ${Wt})) * 1px);
        color: ${Zr};
        border-radius: calc(${Zt} * 1px);
        border: calc(${Jt} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${Zr};
      }

      :host(:${o}) {
        ${Oi}
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${Zr};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(a(Ee`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${et.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${et.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${et.Highlight};
            fill: currentcolor;
          }
          :host(:${o}) {
            background: transparent;
            outline-color: ${et.ButtonText};
          }
        `)),ld=Fe.compose({baseName:"tab",template:Ve,styles:rd}),id=rd,nd=(e,o)=>Ee`
  ${t("block")} :host {
    box-sizing: border-box;
    ${Ti}
    padding: 0 calc((6 + (${Yt} * 2 * ${Wt})) * 1px);
  }
`,sd=De.compose({baseName:"tab-panel",template:ze,styles:nd}),cd=nd,dd=Te.compose({baseName:"tabs",template:Ce,styles:ad}),ud=ad,hd=".control",pd=(e,o)=>Ee`
    ${t("inline-flex")}

    ${zn(0,0,hd)}

    ${Tn()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${Pi} * 2) * 1px);
      padding: calc(${Yt} * 1.5px) calc(${Yt} * 2px + 1px);
    }

    :host .control {
      resize: none;
    }

    :host(.resize-both) .control {
      resize: both;
    }

    :host(.resize-horizontal) .control {
      resize: horizontal;
    }

    :host(.resize-vertical) .control {
      resize: vertical;
    }

    :host([cols]) {
      width: initial;
    }

    :host([rows]) .control {
      height: initial;
    }
  `.withBehaviors(Hn("outline",Cn(0,0,hd)),Hn("filled",Bn(0,0,hd)),a(Ln(0,0,hd)));class gd extends Be{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}bt([Xe],gd.prototype,"appearance",void 0);const bd=gd.compose({baseName:"text-area",baseClass:Be,template:Le,styles:pd,shadowOptions:{delegatesFocus:!0}}),fd=pd,vd=".root",$d=(e,o)=>Ee`
    ${t("inline-block")}

    ${zn(0,0,vd)}

    ${Tn()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${Yt} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(Hn("outline",Cn(0,0,vd)),Hn("filled",Bn(0,0,vd)),a(Ln(0,0,vd)));class md extends He{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}bt([Xe],md.prototype,"appearance",void 0);const xd=md.compose({baseName:"text-field",baseClass:He,template:Se,styles:$d,shadowOptions:{delegatesFocus:!0}}),wd=$d;class yd extends je{}const kd=yd.compose({baseName:"toolbar",baseClass:je,template:Ne,styles:(e,r)=>Ee`
    ${t("inline-flex")} :host {
      --toolbar-item-gap: calc(${Yt} * 1px);
      background: ${Xa};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${o}) {
      ${Oi}
    }

    .positioning-region {
      align-items: center;
      display: inline-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      flex-grow: 1;
    }

    :host([orientation='vertical']) .positioning-region {
      flex-direction: column;
      align-items: start;
    }

    ::slotted(:not([slot])) {
      flex: 0 0 auto;
      margin: 0 var(--toolbar-item-gap);
    }

    :host([orientation='vertical']) ::slotted(:not([slot])) {
      margin: var(--toolbar-item-gap) 0;
    }

    :host([orientation='vertical']) {
      display: inline-flex;
      flex-direction: column;
    }

    .start,
    .end {
      display: flex;
      align-items: center;
    }

    .end {
      margin-inline-start: auto;
    }

    .start__hidden,
    .end__hidden {
      display: none;
    }

    ::slotted(svg) {
      ${""}
      width: 16px;
      height: 16px;
    }
  `.withBehaviors(a(Ee`
        :host(:${o}) {
          outline-color: ${et.Highlight};
          color: ${et.ButtonText};
          forced-color-adjust: none;
        }
      `))});class Fd extends Ie{connectedCallback(){super.connectedCallback(),Xa.setValueFor(this,Ia)}}const Vd=Fd.compose({baseName:"tooltip",baseClass:Ie,template:Ge,styles:(e,t)=>Ee`
    :host {
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${Zt} * 1px);
      border: calc(${Jt} * 1px) solid ${xl};
      background: ${Xa};
      color: ${Zr};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${Ti}
      white-space: nowrap;
      box-shadow: ${un};
    }

    ${e.tagFor(h)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${e.tagFor(h)}.right,
    ${e.tagFor(h)}.left {
      flex-direction: column;
    }

    ${e.tagFor(h)}.top .tooltip::after,
    ${e.tagFor(h)}.bottom .tooltip::after,
    ${e.tagFor(h)}.left .tooltip::after,
    ${e.tagFor(h)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${Xa};
      border-top: calc(${Jt} * 1px) solid ${xl};
      border-left: calc(${Jt} * 1px) solid ${xl};
      position: absolute;
    }

    ${e.tagFor(h)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${e.tagFor(h)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${e.tagFor(h)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${e.tagFor(h)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${e.tagFor(h)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${e.tagFor(h)}.left .tooltip {
      margin-right: 12px;
    }

    ${e.tagFor(h)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${e.tagFor(h)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(a(Ee`
        :host([disabled]) {
          opacity: 1;
        }
        ${e.tagFor(h)}.top .tooltip::after,
        ${e.tagFor(h)}.bottom .tooltip::after,
        ${e.tagFor(h)}.left .tooltip::after,
        ${e.tagFor(h)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `))}),Dd=(e,o)=>Ee`
  :host([hidden]) {
    display: none;
  }

  ${t("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,zd=Oe.compose({baseName:"tree-view",template:Re,styles:Dd}),Td=Dd,Cd=Ee`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${Pi} * -1px));
  }
  :host([selected])::after {
    left: calc(${Qt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Bd=Ee`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${Pi} * -1px));
  }
  :host([selected])::after {
    right: calc(${Qt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Ld=Ae`((${qt} / 2) * ${Yt}) + ((${Yt} * ${Wt}) / 2)`,Hd=e.create("tree-item-expand-collapse-hover").withDefault((e=>{const t=Rr.getValueFor(e);return t.evaluate(e,t.evaluate(e).hover).hover})),Sd=e.create("tree-item-expand-collapse-selected-hover").withDefault((e=>{const t=jr.getValueFor(e);return Rr.getValueFor(e).evaluate(e,t.evaluate(e).rest).hover})),jd=(e,r)=>Ee`
    ${t("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${Zr};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${eo};
      --expand-collapse-button-size: calc(${Pi} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Pr};
      border: calc(${Jt} * 1px) solid transparent;
      border-radius: calc(${Zt} * 1px);
      height: calc((${Pi} + 1) * 1px);
    }

    :host(:${o}) .positioning-region {
      ${Oi}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Mr};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${_r};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${Pi} * 1px);
      margin-inline-start: calc(${Yt} * 2px + 8px);
      ${Ti}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${Yt} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${Zt} * 1px);
      ${""} width: calc((${Ld} + (${Yt} * 2)) * 1px);
      height: calc((${Ld} + (${Yt} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 6px;
    }

    .expand-collapse-button svg {
      transition: transform 0.1s linear;
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
    }

    .start {
      ${""} margin-inline-end: calc(${Yt} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${Yt} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${Xt};
      cursor: ${s};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${Hd};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${Nr};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${Sd};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${Pi} / 4) * 1px);
      width: 3px;
      height: calc((${Pi} / 2) * 1px);
      ${""} background: ${Wa};
      border-radius: calc(${Zt} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${Pi} * -1px);
    }
  `.withBehaviors(new Yi(Cd,Bd),a(Ee`
        :host {
          color: ${et.ButtonText};
        }
        .positioning-region {
          border-color: ${et.ButtonFace};
          background: ${et.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${et.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${et.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${et.GrayText};
        }
        :host([selected])::after {
          background: ${et.HighlightText};
        }
        :host(:${o}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${et.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${et.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${et.ButtonFace};
          fill: ${et.ButtonText};
        }
      `)),Nd=Pe.compose({baseName:"tree-item",template:Me,styles:jd,expandCollapseGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '}),Id=jd,Gd={fluentAccordion:Ui,fluentAccordionItem:Xi,fluentAnchor:Gn,fluentAnchoredRegion:Rn,fluentBadge:An,fluentBreadcrumb:qn,fluentBreadcrumbItem:Yn,fluentButton:ts,fluentCalendar:is,fluentCard:cs,fluentCheckbox:hs,fluentCombobox:ks,fluentDataGrid:Hs,fluentDataGridCell:Ts,fluentDataGridRow:Bs,fluentDesignSystemProvider:Os,fluentDialog:Ps,fluentDivider:As,fluentFlipper:qs,fluentHorizontalScroll:Qs,fluentListbox:ac,fluentOption:ic,fluentMenu:dc,fluentMenuItem:pc,fluentNumberField:mc,fluentProgress:yc,fluentProgressRing:Dc,fluentRadio:Cc,fluentRadioGroup:Hc,fluentSearch:Pc,fluentSelect:Ac,fluentSkeleton:qc,fluentSlider:Yc,fluentSliderLabel:Jc,fluentSwitch:td,fluentTabs:dd,fluentTab:ld,fluentTabPanel:sd,fluentTextArea:bd,fluentTextField:xd,fluentToolbar:kd,fluentTooltip:Vd,fluentTreeView:zd,fluentTreeItem:Nd,register(e,...t){if(e)for(const o in this)"register"!==o&&this[o]().register(e,...t)}};function Od(e){return _e.getOrCreate(e).withPrefix("fluent")}export{$n as AccentButtonStyles,Nn as Anchor,_n as Badge,es as Button,ss as Card,ys as Combobox,Gs as DesignSystemProvider,Yi as DirectionalStyleSheetBehavior,Js as HorizontalScroll,mn as HypertextStyles,xn as LightweightButtonStyles,oc as Listbox,cc as Menu,vn as NeutralButtonStyles,vc as NumberField,nc as OptionStyles,wn as OutlineButtonStyles,Ft as PaletteRGB,wc as Progress,Vc as ProgressRing,Bc as RadioStyles,Rc as Search,_c as Select,Rt as StandardLuminance,yn as StealthButtonStyles,vt as SwatchRGB,gd as TextArea,md as TextField,yd as Toolbar,Fd as Tooltip,La as accentBaseColor,Za as accentFillActive,jo as accentFillActiveDelta,Ka as accentFillFocus,No as accentFillFocusDelta,Ya as accentFillHover,So as accentFillHoverDelta,Ua as accentFillRecipe,Wa as accentFillRest,Ho as accentFillRestDelta,ir as accentForegroundActive,Oo as accentForegroundActiveDelta,di as accentForegroundCut,ui as accentForegroundCutLarge,nr as accentForegroundFocus,Ro as accentForegroundFocusDelta,lr as accentForegroundHover,Go as accentForegroundHoverDelta,ar as accentForegroundRecipe,rr as accentForegroundRest,Io as accentForegroundRestDelta,Ha as accentPalette,ur as accentStrokeControlActive,hr as accentStrokeControlFocus,dr as accentStrokeControlHover,sr as accentStrokeControlRecipe,cr as accentStrokeControlRest,qi as accordionItemStyles,Wi as accordionStyles,Gd as allComponents,Ki as ambientShadow,In as anchorStyles,Pn as anchoredRegionStyles,En as badgeStyles,fn as baseButtonStyles,qt as baseHeightMultiplier,Ut as baseHorizontalSpacingMultiplier,zn as baseInputStyles,Lo as baseLayerLuminance,eo as bodyFont,Zn as breadcrumbItemStyles,Un as breadcrumbStyles,os as buttonStyles,ds as cardStyles,ps as checkboxStyles,Fs as comboboxStyles,Zt as controlCornerRadius,ql as cornerRadius,Cs as dataGridCellStyles,Ls as dataGridRowStyles,Ss as dataGridStyles,Wt as density,Yt as designUnit,Ms as dialogStyles,Et as direction,Ji as directionalShadow,Xt as disabledOpacity,Es as dividerStyles,Ul as elevatedCornerRadius,Qi as elevation,sn as elevationShadowCardActive,an as elevationShadowCardActiveSize,cn as elevationShadowCardFocus,rn as elevationShadowCardFocusSize,nn as elevationShadowCardHover,on as elevationShadowCardHoverSize,ln as elevationShadowCardRest,tn as elevationShadowCardRestSize,bn as elevationShadowDialog,gn as elevationShadowDialogSize,pn as elevationShadowFlyout,hn as elevationShadowFlyoutSize,en as elevationShadowRecipe,un as elevationShadowTooltip,dn as elevationShadowTooltipSize,Xa as fillColor,Us as flipperStyles,Ui as fluentAccordion,Xi as fluentAccordionItem,Gn as fluentAnchor,Rn as fluentAnchoredRegion,An as fluentBadge,qn as fluentBreadcrumb,Yn as fluentBreadcrumbItem,ts as fluentButton,is as fluentCalendar,cs as fluentCard,hs as fluentCheckbox,ks as fluentCombobox,Hs as fluentDataGrid,Ts as fluentDataGridCell,Bs as fluentDataGridRow,Os as fluentDesignSystemProvider,Ps as fluentDialog,As as fluentDivider,qs as fluentFlipper,Qs as fluentHorizontalScroll,ac as fluentListbox,dc as fluentMenu,pc as fluentMenuItem,mc as fluentNumberField,ic as fluentOption,yc as fluentProgress,Dc as fluentProgressRing,Cc as fluentRadio,Hc as fluentRadioGroup,Pc as fluentSearch,Ac as fluentSelect,qc as fluentSkeleton,Yc as fluentSlider,Jc as fluentSliderLabel,td as fluentSwitch,ld as fluentTab,sd as fluentTabPanel,dd as fluentTabs,bd as fluentTextArea,xd as fluentTextField,kd as fluentToolbar,Vd as fluentTooltip,Nd as fluentTreeItem,zd as fluentTreeView,Yl as focusOutlineWidth,Ll as focusStrokeInner,Bl as focusStrokeInnerRecipe,Cl as focusStrokeOuter,Tl as focusStrokeOuterRecipe,Qt as focusStrokeWidth,Oi as focusTreatmentBase,Ri as focusTreatmentTight,to as fontWeight,tr as foregroundOnAccentActive,Nl as foregroundOnAccentActiveLarge,or as foregroundOnAccentFocus,Il as foregroundOnAccentFocusLarge,er as foregroundOnAccentHover,jl as foregroundOnAccentHoverLarge,Hl as foregroundOnAccentLargeRecipe,Ja as foregroundOnAccentRecipe,Qa as foregroundOnAccentRest,Sl as foregroundOnAccentRestLarge,Pi as heightNumber,ec as horizontalScrollStyles,Bn as inputFilledStyles,Ln as inputForcedColorStyles,Cn as inputOutlineStyles,Tn as inputStateStyles,wt as isDark,Kt as layerCornerRadius,rc as listboxStyles,gc as menuItemStyles,uc as menuStyles,Ca as neutralBaseColor,fi as neutralContrastFillActive,Jl as neutralContrastFillActiveDelta,vi as neutralContrastFillFocus,Ql as neutralContrastFillFocusDelta,bi as neutralContrastFillHover,Kl as neutralContrastFillHoverDelta,gi as neutralContrastFillRest,Zl as neutralContrastFillRestDelta,hi as neutralDivider,li as neutralDividerRestDelta,fr as neutralFillActive,_o as neutralFillActiveDelta,pi as neutralFillCard,ei as neutralFillCardDelta,vr as neutralFillFocus,Ao as neutralFillFocusDelta,br as neutralFillHover,Mo as neutralFillHoverDelta,wr as neutralFillInputActive,qo as neutralFillInputActiveDelta,Dr as neutralFillInputAltActive,Zo as neutralFillInputAltActiveDelta,zr as neutralFillInputAltFocus,Ko as neutralFillInputAltFocusDelta,Vr as neutralFillInputAltHover,Yo as neutralFillInputAltHoverDelta,kr as neutralFillInputAltRecipe,Fr as neutralFillInputAltRest,Wo as neutralFillInputAltRestDelta,yr as neutralFillInputFocus,Uo as neutralFillInputFocusDelta,xr as neutralFillInputHover,Xo as neutralFillInputHoverDelta,$r as neutralFillInputRecipe,mr as neutralFillInputRest,Eo as neutralFillInputRestDelta,El as neutralFillInverseActive,Rl as neutralFillInverseActiveDelta,Xl as neutralFillInverseFocus,Pl as neutralFillInverseFocusDelta,Al as neutralFillInverseHover,Ol as neutralFillInverseHoverDelta,Ml as neutralFillInverseRecipe,_l as neutralFillInverseRest,Gl as neutralFillInverseRestDelta,Lr as neutralFillLayerActive,ea as neutralFillLayerActiveDelta,Hr as neutralFillLayerAltRecipe,Sr as neutralFillLayerAltRest,ta as neutralFillLayerAltRestDelta,Br as neutralFillLayerHover,Qo as neutralFillLayerHoverDelta,Tr as neutralFillLayerRecipe,Cr as neutralFillLayerRest,Jo as neutralFillLayerRestDelta,pr as neutralFillRecipe,gr as neutralFillRest,Po as neutralFillRestDelta,Gr as neutralFillSecondaryActive,ra as neutralFillSecondaryActiveDelta,Or as neutralFillSecondaryFocus,la as neutralFillSecondaryFocusDelta,Ir as neutralFillSecondaryHover,aa as neutralFillSecondaryHoverDelta,jr as neutralFillSecondaryRecipe,Nr as neutralFillSecondaryRest,oa as neutralFillSecondaryRestDelta,_r as neutralFillStealthActive,sa as neutralFillStealthActiveDelta,Ar as neutralFillStealthFocus,ca as neutralFillStealthFocusDelta,Mr as neutralFillStealthHover,na as neutralFillStealthHoverDelta,Rr as neutralFillStealthRecipe,Pr as neutralFillStealthRest,ia as neutralFillStealthRestDelta,Ur as neutralFillStrongActive,ha as neutralFillStrongActiveDelta,Wr as neutralFillStrongFocus,pa as neutralFillStrongFocusDelta,qr as neutralFillStrongHover,ua as neutralFillStrongHoverDelta,Er as neutralFillStrongRecipe,Xr as neutralFillStrongRest,da as neutralFillStrongRestDelta,xi as neutralFillToggleActive,ai as neutralFillToggleActiveDelta,wi as neutralFillToggleFocus,ri as neutralFillToggleFocusDelta,mi as neutralFillToggleHover,oi as neutralFillToggleHoverDelta,$i as neutralFillToggleRest,ti as neutralFillToggleRestDelta,yi as neutralFocus,ki as neutralFocusInnerAccent,Jr as neutralForegroundActive,Qr as neutralForegroundFocus,tl as neutralForegroundHint,el as neutralForegroundHintRecipe,Kr as neutralForegroundHover,Yr as neutralForegroundRecipe,Zr as neutralForegroundRest,Oa as neutralLayer1,Ga as neutralLayer1Recipe,Pa as neutralLayer2,Ra as neutralLayer2Recipe,_a as neutralLayer3,Ma as neutralLayer3Recipe,Ea as neutralLayer4,Aa as neutralLayer4Recipe,ja as neutralLayerCardContainer,Sa as neutralLayerCardContainerRecipe,Ia as neutralLayerFloating,Na as neutralLayerFloatingRecipe,ii as neutralLayerL1,ni as neutralLayerL2,si as neutralLayerL3,ci as neutralLayerL4,Di as neutralOutlineActive,zi as neutralOutlineFocus,Vi as neutralOutlineHover,Fi as neutralOutlineRest,Ba as neutralPalette,ll as neutralStrokeActive,fa as neutralStrokeActiveDelta,dl as neutralStrokeControlActive,xa as neutralStrokeControlActiveDelta,ul as neutralStrokeControlFocus,wa as neutralStrokeControlFocusDelta,cl as neutralStrokeControlHover,ma as neutralStrokeControlHoverDelta,nl as neutralStrokeControlRecipe,sl as neutralStrokeControlRest,$a as neutralStrokeControlRestDelta,hl as neutralStrokeDividerRecipe,pl as neutralStrokeDividerRest,ya as neutralStrokeDividerRestDelta,il as neutralStrokeFocus,va as neutralStrokeFocusDelta,rl as neutralStrokeHover,ba as neutralStrokeHoverDelta,vl as neutralStrokeInputActive,$l as neutralStrokeInputFocus,fl as neutralStrokeInputHover,gl as neutralStrokeInputRecipe,bl as neutralStrokeInputRest,yl as neutralStrokeLayerActive,Va as neutralStrokeLayerActiveDelta,wl as neutralStrokeLayerHover,Fa as neutralStrokeLayerHoverDelta,ml as neutralStrokeLayerRecipe,xl as neutralStrokeLayerRest,ka as neutralStrokeLayerRestDelta,ol as neutralStrokeRecipe,al as neutralStrokeRest,ga as neutralStrokeRestDelta,Dl as neutralStrokeStrongActive,za as neutralStrokeStrongActiveDelta,zl as neutralStrokeStrongFocus,Ta as neutralStrokeStrongFocusDelta,Vl as neutralStrokeStrongHover,Da as neutralStrokeStrongHoverDelta,kl as neutralStrokeStrongRecipe,Fl as neutralStrokeStrongRest,$c as numberFieldStyles,Wl as outlineWidth,zc as progressRingStyles,kc as progressStyles,Od as provideFluentDesignSystem,Sc as radioGroupStyles,Mc as searchStyles,jc as searchTemplate,Ec as selectStyles,Uc as skeletonStyles,Qc as sliderLabelStyles,Zc as sliderStyles,Jt as strokeWidth,od as switchStyles,cd as tabPanelStyles,id as tabStyles,ud as tabsStyles,fd as textAreaStyles,wd as textFieldStyles,Id as treeItemStyles,Td as treeViewStyles,Ti as typeRampBase,ao as typeRampBaseFontSize,lo as typeRampBaseFontVariations,ro as typeRampBaseLineHeight,Ci as typeRampMinus1,io as typeRampMinus1FontSize,so as typeRampMinus1FontVariations,no as typeRampMinus1LineHeight,Bi as typeRampMinus2,co as typeRampMinus2FontSize,ho as typeRampMinus2FontVariations,uo as typeRampMinus2LineHeight,Li as typeRampPlus1,po as typeRampPlus1FontSize,bo as typeRampPlus1FontVariations,go as typeRampPlus1LineHeight,Hi as typeRampPlus2,fo as typeRampPlus2FontSize,$o as typeRampPlus2FontVariations,vo as typeRampPlus2LineHeight,Si as typeRampPlus3,mo as typeRampPlus3FontSize,wo as typeRampPlus3FontVariations,xo as typeRampPlus3LineHeight,ji as typeRampPlus4,yo as typeRampPlus4FontSize,Fo as typeRampPlus4FontVariations,ko as typeRampPlus4LineHeight,Ni as typeRampPlus5,Vo as typeRampPlus5FontSize,zo as typeRampPlus5FontVariations,Do as typeRampPlus5LineHeight,Ii as typeRampPlus6,To as typeRampPlus6FontSize,Bo as typeRampPlus6FontVariations,Co as typeRampPlus6LineHeight};export default null;
//# sourceMappingURL=/sm/2570d69a2274e61ee5d8a226741ee8f5fb5a128d6fd7141410a9be22befc61d8.map