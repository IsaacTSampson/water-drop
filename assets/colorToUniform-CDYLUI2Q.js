import{D as Pt,m as N,b as Bt,G as At,c as Q,B as z,w as zt,E as Gt,g as Ut,T as It,n as X}from"./index-BRTvXtaW.js";const T=Object.create(null),Y=Object.create(null);function L(i,t){let e=Y[i];return e===void 0&&(T[t]===void 0&&(T[t]=1),Y[i]=e=T[t]++),e}let w;function ft(){return(!w||w!=null&&w.isContextLost())&&(w=Pt.get().createCanvas().getContext("webgl",{})),w}let G;function Tt(){if(!G){G="mediump";const i=ft();i&&i.getShaderPrecisionFormat&&(G=i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision?"highp":"mediump")}return G}function Et(i,t,e){return t?i:e?(i=i.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${i}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${i}
        `}function Ct(i,t,e){const r=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(i.substring(0,9)!=="precision"){let n=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return n==="highp"&&r!=="highp"&&(n="mediump"),`precision ${n} float;
${i}`}else if(r!=="highp"&&i.substring(0,15)==="precision highp")return i.replace("precision highp","precision mediump");return i}function Mt(i,t){return t?`#version 300 es
${i}`:i}const Rt={},Vt={};function Dt(i,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const r=e?Rt:Vt;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,i.indexOf("#define SHADER_NAME")!==-1?i:`${`#define SHADER_NAME ${t}`}
${i}`}function $t(i,t){return t?i.replace("#version 300 es",""):i}const E={stripVersion:$t,ensurePrecision:Ct,addProgramDefines:Et,setProgramName:Dt,insertVersion:Mt},C=Object.create(null),ht=class O{constructor(t){t={...O.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Tt()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let n=t.fragment,s=t.vertex;Object.keys(E).forEach(a=>{const o=r[a];n=E[a](n,o,!0),s=E[a](s,o,!1)}),this.fragment=n,this.vertex=s,this._key=L(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return C[e]||(C[e]=new O(t)),C[e]}};ht.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let dt=ht;const q={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function kt(i){return q[i]??q.float32}const Ft={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Nt({source:i,entryPoint:t}){const e={},r=i.indexOf(`fn ${t}`);if(r!==-1){const n=i.indexOf("->",r);if(n!==-1){const s=i.substring(r,n),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let o;for(;(o=a.exec(s))!==null;){const u=Ft[o[3]]??"float32";e[o[2]]={location:parseInt(o[1],10),format:u,stride:kt(u).stride,offset:0,instance:!1,start:0}}}}return e}function M(i){var h,m;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,n=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,o=/(\w+)\s*:\s*([\w\<\>]+)/g,u=/struct\s+(\w+)/,f=(h=i.match(t))==null?void 0:h.map(d=>({group:parseInt(d.match(e)[1],10),binding:parseInt(d.match(r)[1],10),name:d.match(n)[2],isUniform:d.match(n)[1]==="<uniform>",type:d.match(s)[1]}));if(!f)return{groups:[],structs:[]};const l=((m=i.match(a))==null?void 0:m.map(d=>{const g=d.match(u)[1],c=d.match(o).reduce((b,p)=>{const[v,x]=p.split(":");return b[v.trim()]=x.trim(),b},{});return c?{name:g,members:c}:null}).filter(({name:d})=>f.some(g=>g.type===d)))??[];return{groups:f,structs:l}}var A=(i=>(i[i.VERTEX=1]="VERTEX",i[i.FRAGMENT=2]="FRAGMENT",i[i.COMPUTE=4]="COMPUTE",i))(A||{});function Ot({groups:i}){const t=[];for(let e=0;e<i.length;e++){const r=i[e];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:A.VERTEX|A.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:A.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:A.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function jt({groups:i}){const t=[];for(let e=0;e<i.length;e++){const r=i[e];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function Ht(i,t){const e=new Set,r=new Set,n=[...i.structs,...t.structs].filter(a=>e.has(a.name)?!1:(e.add(a.name),!0)),s=[...i.groups,...t.groups].filter(a=>{const o=`${a.name}-${a.binding}`;return r.has(o)?!1:(r.add(o),!0)});return{structs:n,groups:s}}const R=Object.create(null);class I{constructor(t){var o,u;this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:e,vertex:r,layout:n,gpuLayout:s,name:a}=t;if(this.name=a,this.fragment=e,this.vertex=r,e.source===r.source){const f=M(e.source);this.structsAndGroups=f}else{const f=M(r.source),l=M(e.source);this.structsAndGroups=Ht(f,l)}this.layout=n??jt(this.structsAndGroups),this.gpuLayout=s??Ot(this.structsAndGroups),this.autoAssignGlobalUniforms=((o=this.layout[0])==null?void 0:o.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((u=this.layout[1])==null?void 0:u.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,r=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=L(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=Nt(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return R[e]||(R[e]=new I(t)),R[e]}}const mt=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],Lt=mt.reduce((i,t)=>(i[t]=!0,i),{});function Wt(i,t){switch(i){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const pt=class xt{constructor(t,e){this._touched=0,this.uid=N("uniform"),this._resourceType="uniformGroup",this._resourceId=N("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...xt.defaultOptions,...e},this.uniformStructures=t;const r={};for(const n in t){const s=t[n];if(s.name=n,s.size=s.size??1,!Lt[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${mt.join(", ")}`);s.value??(s.value=Wt(s.type,s.size)),r[n]=s.value}this.uniforms=r,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=L(Object.keys(r).map(n=>`${n}-${t[n].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};pt.defaultOptions={ubo:!1,isStatic:!1};let gt=pt;class V{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const r in t){const n=t[r];this.setResource(n,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const r in this.resources)t[e++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,e){var n,s;const r=this.resources[e];t!==r&&(r&&((n=t.off)==null||n.call(t,"change",this.onResourceChange,this)),(s=t.on)==null||s.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const r in e)e[r]._touched=t}destroy(){var e;const t=this.resources;for(const r in t){const n=t[r];(e=n.off)==null||e.call(n,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const r in e)e[r]===t&&(e[r]=null)}else this._updateKey()}}var j=(i=>(i[i.WEBGL=1]="WEBGL",i[i.WEBGPU=2]="WEBGPU",i[i.BOTH=3]="BOTH",i))(j||{});class W extends Bt{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:r,groups:n,resources:s,compatibleRenderers:a,groupMap:o}=t;this.gpuProgram=e,this.glProgram=r,a===void 0&&(a=0,e&&(a|=j.WEBGPU),r&&(a|=j.WEBGL)),this.compatibleRenderers=a;const u={};if(!s&&!n&&(s={}),s&&n)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&n&&!o)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&n&&o)for(const f in o)for(const l in o[f]){const h=o[f][l];u[h]={group:f,binding:l,name:h}}else if(e&&n&&!o){const f=e.structsAndGroups.groups;o={},f.forEach(l=>{o[l.group]=o[l.group]||{},o[l.group][l.binding]=l.name,u[l.name]=l})}else if(s){n={},o={},e&&e.structsAndGroups.groups.forEach(h=>{o[h.group]=o[h.group]||{},o[h.group][h.binding]=h.name,u[h.name]=h});let f=0;for(const l in s)u[l]||(n[99]||(n[99]=new V,this._ownedBindGroups.push(n[99])),u[l]={group:99,binding:f,name:l},o[99]=o[99]||{},o[99][f]=l,f++);for(const l in s){const h=l;let m=s[l];!m.source&&!m._resourceType&&(m=new gt(m));const d=u[h];d&&(n[d.group]||(n[d.group]=new V,this._ownedBindGroups.push(n[d.group])),n[d.group].setResource(m,d.binding))}}this.groups=n,this._uniformBindMap=o,this.resources=this._buildResourceAccessor(n,u)}addResource(t,e,r){var n,s;(n=this._uniformBindMap)[e]||(n[e]={}),(s=this._uniformBindMap[e])[r]||(s[r]=t),this.groups[e]||(this.groups[e]=new V,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const r={};for(const n in e){const s=e[n];Object.defineProperty(r,s.name,{get(){return t[s.group].getResource(s.binding)},set(a){t[s.group].setResource(a,s.binding)}})}return r}destroy(t=!1){var e,r;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:r,...n}=t;let s,a;return e&&(s=I.from(e)),r&&(a=dt.from(r)),new W({gpuProgram:s,glProgram:a,...n})}}const Kt=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function Qt(i){let t="";for(let e=0;e<i;++e)e>0&&(t+=`
else `),e<i-1&&(t+=`if(test == ${e}.0){}`);return t}function Xt(i,t){if(i===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const e=t.createShader(t.FRAGMENT_SHADER);try{for(;;){const r=Kt.replace(/%forloop%/gi,Qt(i));if(t.shaderSource(e,r),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))i=i/2|0;else break}}finally{t.deleteShader(e)}return i}let P=null;function Yt(){var t;if(P)return P;const i=ft();return P=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),P=Xt(P,i),(t=i.getExtension("WEBGL_lose_context"))==null||t.loseContext(),P}class Z{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function J(i,t){const e=i.byteLength/8|0,r=new Float64Array(i,0,e);new Float64Array(t,0,e).set(r);const s=i.byteLength-e*8;if(s>0){const a=new Uint8Array(i,e*8,s);new Uint8Array(t,e*8,s).set(a)}}const qt={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Zt=(i=>(i[i.DISABLED=0]="DISABLED",i[i.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",i[i.MASK_ACTIVE=2]="MASK_ACTIVE",i[i.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",i[i.NONE=4]="NONE",i))(Zt||{});function tt(i,t){return t.alphaMode==="no-premultiply-alpha"&&qt[i]||i}class Jt{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class te{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new Jt,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const vt=[];let H=0;function et(){return H>0?vt[--H]:new te}function rt(i){vt[H++]=i}let B=0;const bt=class U{constructor(t={}){this.uid=N("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],U.defaultOptions.maxTextures=U.defaultOptions.maxTextures??Yt(),t={...U.defaultOptions,...t};const{maxTextures:e,attributesInitialSize:r,indicesInitialSize:n}=t;this.attributeBuffer=new Z(r*4),this.indexBuffer=new Uint16Array(n),this.maxTextures=e}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let t=0;t<this.batchIndex;t++)rt(this.batches[t]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t._indexStart=this.indexSize,t._attributeStart=this.attributeSize,t._batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.attributeSize*this.vertexSize}checkAndUpdateTexture(t,e){const r=t._batch.textures.ids[e._source.uid];return!r&&r!==0?!1:(t._textureId=r,t.texture=e,!0)}updateElement(t){this.dirty=!0;const e=this.attributeBuffer;t.packAsQuad?this.packQuadAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId):this.packAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId)}break(t){const e=this._elements;if(!e[this.elementStart])return;let r=et(),n=r.textures;n.clear();const s=e[this.elementStart];let a=tt(s.blendMode,s.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,u=this.attributeBuffer.uint32View,f=this.indexBuffer;let l=this._batchIndexSize,h=this._batchIndexStart,m="startBatch";const d=this.maxTextures;for(let g=this.elementStart;g<this.elementSize;++g){const c=e[g];e[g]=null;const p=c.texture._source,v=tt(c.blendMode,p),x=a!==v;if(p._batchTick===B&&!x){c._textureId=p._textureBindLocation,l+=c.indexSize,c.packAsQuad?(this.packQuadAttributes(c,o,u,c._attributeStart,c._textureId),this.packQuadIndex(f,c._indexStart,c._attributeStart/this.vertexSize)):(this.packAttributes(c,o,u,c._attributeStart,c._textureId),this.packIndex(c,f,c._indexStart,c._attributeStart/this.vertexSize)),c._batch=r;continue}p._batchTick=B,(n.count>=d||x)&&(this._finishBatch(r,h,l-h,n,a,t,m),m="renderBatch",h=l,a=v,r=et(),n=r.textures,n.clear(),++B),c._textureId=p._textureBindLocation=n.count,n.ids[p.uid]=n.count,n.textures[n.count++]=p,c._batch=r,l+=c.indexSize,c.packAsQuad?(this.packQuadAttributes(c,o,u,c._attributeStart,c._textureId),this.packQuadIndex(f,c._indexStart,c._attributeStart/this.vertexSize)):(this.packAttributes(c,o,u,c._attributeStart,c._textureId),this.packIndex(c,f,c._indexStart,c._attributeStart/this.vertexSize))}n.count>0&&(this._finishBatch(r,h,l-h,n,a,t,m),h=l,++B),this.elementStart=this.elementSize,this._batchIndexStart=h,this._batchIndexSize=l}_finishBatch(t,e,r,n,s,a,o){t.gpuBindGroup=null,t.bindGroup=null,t.action=o,t.batcher=this,t.textures=n,t.blendMode=s,t.start=e,t.size=r,++B,this.batches[this.batchIndex++]=t,a.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),r=new Z(e);J(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(t){const e=this.indexBuffer;let r=Math.max(t,e.length*1.5);r+=r%2;const n=r>65535?new Uint32Array(r):new Uint16Array(r);if(n.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let s=0;s<e.length;s++)n[s]=e[s];else J(e.buffer,n.buffer);this.indexBuffer=n}packQuadIndex(t,e,r){t[e]=r+0,t[e+1]=r+1,t[e+2]=r+2,t[e+3]=r+0,t[e+4]=r+2,t[e+5]=r+3}packIndex(t,e,r,n){const s=t.indices,a=t.indexSize,o=t.indexOffset,u=t.attributeOffset;for(let f=0;f<a;f++)e[r++]=n+s[f+o]-u}destroy(){for(let t=0;t<this.batches.length;t++)rt(this.batches[t]);this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t]._batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};bt.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let ee=bt;const re=new Float32Array(1),ie=new Uint32Array(1);class ne extends At{constructor(){const e=new Q({data:re,label:"attribute-batch-buffer",usage:z.VERTEX|z.COPY_DST,shrinkToFit:!1}),r=new Q({data:ie,label:"index-batch-buffer",usage:z.INDEX|z.COPY_DST,shrinkToFit:!1}),n=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:n,offset:0},aUV:{buffer:e,format:"float32x2",stride:n,offset:2*4},aColor:{buffer:e,format:"unorm8x4",stride:n,offset:4*4},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:n,offset:5*4}},indexBuffer:r})}}function it(i,t,e){if(i)for(const r in i){const n=r.toLocaleLowerCase(),s=t[n];if(s){let a=i[r];r==="header"&&(a=a.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&s.push(`//----${e}----//`),s.push(a)}else zt(`${r} placement hook does not exist in shader`)}}const se=/\{\{(.*?)\}\}/g;function nt(i){var r;const t={};return(((r=i.match(se))==null?void 0:r.map(n=>n.replace(/[{()}]/g,"")))??[]).forEach(n=>{t[n]=[]}),t}function st(i,t){let e;const r=/@in\s+([^;]+);/g;for(;(e=r.exec(i))!==null;)t.push(e[1])}function ot(i,t,e=!1){const r=[];st(t,r),i.forEach(o=>{o.header&&st(o.header,r)});const n=r;e&&n.sort();const s=n.map((o,u)=>`       @location(${u}) ${o},`).join(`
`);let a=t.replace(/@in\s+[^;]+;\s*/g,"");return a=a.replace("{{in}}",`
${s}
`),a}function at(i,t){let e;const r=/@out\s+([^;]+);/g;for(;(e=r.exec(i))!==null;)t.push(e[1])}function oe(i){const e=/\b(\w+)\s*:/g.exec(i);return e?e[1]:""}function ae(i){const t=/@.*?\s+/g;return i.replace(t,"")}function ue(i,t){const e=[];at(t,e),i.forEach(u=>{u.header&&at(u.header,e)});let r=0;const n=e.sort().map(u=>u.indexOf("builtin")>-1?u:`@location(${r++}) ${u}`).join(`,
`),s=e.sort().map(u=>`       var ${ae(u)};`).join(`
`),a=`return VSOutput(
                ${e.sort().map(u=>` ${oe(u)}`).join(`,
`)});`;let o=t.replace(/@out\s+[^;]+;\s*/g,"");return o=o.replace("{{struct}}",`
${n}
`),o=o.replace("{{start}}",`
${s}
`),o=o.replace("{{return}}",`
${a}
`),o}function ut(i,t){let e=i;for(const r in t){const n=t[r];n.join(`
`).length?e=e.replace(`{{${r}}}`,`//-----${r} START-----//
${n.join(`
`)}
//----${r} FINISH----//`):e=e.replace(`{{${r}}}`,"")}return e}const y=Object.create(null),D=new Map;let ce=0;function le({template:i,bits:t}){const e=_t(i,t);if(y[e])return y[e];const{vertex:r,fragment:n}=he(i,t);return y[e]=yt(r,n,t),y[e]}function fe({template:i,bits:t}){const e=_t(i,t);return y[e]||(y[e]=yt(i.vertex,i.fragment,t)),y[e]}function he(i,t){const e=t.map(a=>a.vertex).filter(a=>!!a),r=t.map(a=>a.fragment).filter(a=>!!a);let n=ot(e,i.vertex,!0);n=ue(e,n);const s=ot(r,i.fragment,!0);return{vertex:n,fragment:s}}function _t(i,t){return t.map(e=>(D.has(e)||D.set(e,ce++),D.get(e))).sort((e,r)=>e-r).join("-")+i.vertex+i.fragment}function yt(i,t,e){const r=nt(i),n=nt(t);return e.forEach(s=>{it(s.vertex,r,s.name),it(s.fragment,n,s.name)}),{vertex:ut(i,r),fragment:ut(t,n)}}const de=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,me=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,pe=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,xe=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`,ge={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},ve={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function be({bits:i,name:t}){const e=le({template:{fragment:me,vertex:de},bits:[ge,...i]});return I.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function _e({bits:i,name:t}){return new dt({name:t,...fe({template:{vertex:pe,fragment:xe},bits:[ve,...i]})})}const ye={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},Se={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},$={};function we(i){const t=[];if(i===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let e=0;for(let r=0;r<i;r++)t.push(`@group(1) @binding(${e++}) var textureSource${r+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${r+1}: sampler;`)}return t.join(`
`)}function Pe(i){const t=[];if(i===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let e=0;e<i;e++)e===i-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function Be(i){return $[i]||($[i]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${we(i)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${Pe(i)}
            `}}),$[i]}const k={};function Ae(i){const t=[];for(let e=0;e<i;e++)e>0&&t.push("else"),e<i-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function ze(i){return k[i]||(k[i]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${i}];

            `,main:`

                ${Ae(i)}
            `}}),k[i]}const Ge={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Ue={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},ct={};function Ie(i){let t=ct[i];if(t)return t;const e=new Int32Array(i);for(let r=0;r<i;r++)e[r]=r;return t=ct[i]=new gt({uTextures:{value:e,type:"i32",size:i}},{isStatic:!0}),t}class Te extends W{constructor(t){const e=_e({name:"batch",bits:[Se,ze(t),Ue]}),r=be({name:"batch",bits:[ye,Be(t),Ge]});super({glProgram:e,gpuProgram:r,resources:{batchSamplers:Ie(t)}})}}let lt=null;const St=class wt extends ee{constructor(){super(...arguments),this.geometry=new ne,this.shader=lt||(lt=new Te(this.maxTextures)),this.name=wt.extension.name,this.vertexSize=6}packAttributes(t,e,r,n,s){const a=s<<16|t.roundPixels&65535,o=t.transform,u=o.a,f=o.b,l=o.c,h=o.d,m=o.tx,d=o.ty,{positions:g,uvs:c}=t,b=t.color,p=t.attributeOffset,v=p+t.attributeSize;for(let x=p;x<v;x++){const _=x*2,S=g[_],K=g[_+1];e[n++]=u*S+l*K+m,e[n++]=h*K+f*S+d,e[n++]=c[_],e[n++]=c[_+1],r[n++]=b,r[n++]=a}}packQuadAttributes(t,e,r,n,s){const a=t.texture,o=t.transform,u=o.a,f=o.b,l=o.c,h=o.d,m=o.tx,d=o.ty,g=t.bounds,c=g.maxX,b=g.minX,p=g.maxY,v=g.minY,x=a.uvs,_=t.color,S=s<<16|t.roundPixels&65535;e[n+0]=u*b+l*v+m,e[n+1]=h*v+f*b+d,e[n+2]=x.x0,e[n+3]=x.y0,r[n+4]=_,r[n+5]=S,e[n+6]=u*c+l*v+m,e[n+7]=h*v+f*c+d,e[n+8]=x.x1,e[n+9]=x.y1,r[n+10]=_,r[n+11]=S,e[n+12]=u*c+l*p+m,e[n+13]=h*p+f*c+d,e[n+14]=x.x2,e[n+15]=x.y2,r[n+16]=_,r[n+17]=S,e[n+18]=u*b+l*p+m,e[n+19]=h*p+f*b+d,e[n+20]=x.x3,e[n+21]=x.y3,r[n+22]=_,r[n+23]=S}};St.extension={type:[Gt.Batcher],name:"default"};let Re=St,Ee=0;class Ce{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,r){const n=new Ut({...this.textureOptions,width:t,height:e,resolution:1,antialias:r,autoGarbageCollect:!0});return new It({source:n,label:`texturePool_${Ee++}`})}getOptimalTexture(t,e,r=1,n){let s=Math.ceil(t*r-1e-6),a=Math.ceil(e*r-1e-6);s=X(s),a=X(a);const o=(s<<17)+(a<<1)+(n?1:0);this._texturePool[o]||(this._texturePool[o]=[]);let u=this._texturePool[o].pop();return u||(u=this.createTexture(s,a,n)),u.source._resolution=r,u.source.width=s/r,u.source.height=a/r,u.source.pixelWidth=s,u.source.pixelHeight=a,u.frame.x=0,u.frame.y=0,u.frame.width=t,u.frame.height=e,u.updateUvs(),this._poolKeyHash[u.uid]=o,u}getSameSizeTexture(t,e=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const r=this._texturePool[e];if(r)for(let n=0;n<r.length;n++)r[n].destroy(!0)}this._texturePool={}}}const Ve=new Ce,F={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},De={...F,vertex:{...F.vertex,header:F.vertex.header.replace("group(1)","group(2)")}},$e={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};class ke{constructor(){this.batcherName="default",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}}function Fe(i,t,e){const r=(i>>24&255)/255;t[e++]=(i&255)/255*r,t[e++]=(i>>8&255)/255*r,t[e++]=(i>>16&255)/255*r,t[e++]=r}export{V as B,Re as D,I as G,j as R,Zt as S,Ve as T,gt as U,be as a,ye as b,L as c,Be as d,W as e,J as f,Yt as g,F as h,dt as i,kt as j,ke as k,De as l,Fe as m,_e as n,Se as o,ze as p,$e as q,Ge as r,Ue as s,Ie as t,tt as u};
