/*! For license information please see 530.bundle.js.LICENSE.txt */
(()=>{var e,r,t,n,a,i,s={5052:(e,r,t)=>{t.a(e,(async(e,n)=>{try{t.d(r,{AleoKeyProvider:()=>l,AleoKeyProviderParams:()=>u,ProgramManager:()=>p});var a=t(9933),i=e([a]);a=(i.then?(await i)():i)[0];async function s(e){const r=await fetch(e);if(!r.ok)throw new Error(r.status+" could not get URL "+e);return r}async function o(e,r){r.method="POST";const t=await fetch(e,r);if(!t.ok)throw new Error(t.status+" could not post URL "+e);return t}class f{host;account;constructor(e){this.host=e+"/testnet3"}setAccount(e){this.account=e}getAccount(){return this.account}setHost(e){this.host=e+"/testnet3"}async fetchData(e="/"){try{const r=await s(this.host+e);return await r.json()}catch(e){throw new Error("Error fetching data.")}}async findUnspentRecords(e,r,t,n,i,s){if(s=s||[],e<0)throw new Error("Start height must be greater than or equal to 0");const o=new Array;let c,q,h,f,u=0,l=BigInt(0);if(void 0===t){if(void 0===this.account)throw new Error("Private key must be specified in an argument to findOwnedRecords or set in the AleoNetworkClient");h=this.account._privateKey}else try{h=t instanceof a._q?t:a._q.from_string(t)}catch(e){throw new Error("Error parsing private key provided.")}const p=h.to_view_key();try{const e=await this.getLatestHeight();if("number"!=typeof e)throw new Error("Error fetching latest block height.");f=e}catch(e){throw new Error("Error fetching latest block height.")}if(q="number"==typeof r&&r<=f?r:f,e>q)throw new Error("Start height must be less than or equal to end height.");for(;q>e;){c=q-50,c<e&&(c=e);try{const e=await this.getBlockRange(c,q);if(q=c,!(e instanceof Error))for(let r=0;r<e.length;r++){const t=e[r].transactions;if(void 0!==t)for(let e=0;e<t.length;e++){const r=t[e];if("execute"==r.type){const e=r.transaction;if(e.execution&&void 0!==e.execution.transitions)for(let r=0;r<e.execution.transitions.length;r++){const t=e.execution.transitions[r];if("credits.aleo"===t.program&&void 0!==t.outputs)for(let e=0;e<t.outputs.length;e++){const r=t.outputs[e];if("record"===r.type)try{const e=a.fW.fromString(r.value);if(e.isOwner(p)){const r=e.decrypt(p),t=r.nonce();if(s.includes(t))continue;const a=r.serialNumberString(h,"credits.aleo","credits");try{await this.getTransitionId(a)}catch(e){if(!n&&(o.push(r),"number"==typeof i&&(l+=r.microcredits(),l>=BigInt(i))))return o;if(void 0!==n&&n.length>0){let e=0;if(r.microcredits()>n[e]){if(e+=1,o.push(r),"number"==typeof i&&(l+=r.microcredits(),l>=BigInt(i)))return o;if(o.length>=n.length)return o}}}}}catch(e){}}}}}}}catch(e){if(console.warn("Error fetching blocks in range: "+c.toString()+"-"+q.toString()),console.warn("Error: ",e),u+=1,u>10)return console.warn("10 failures fetching records reached. Returning records fetched so far"),o}}return o}async getBlock(e){try{return await this.fetchData("/block/"+e)}catch(e){throw new Error("Error fetching block.")}}async getBlockRange(e,r){try{return await this.fetchData("/blocks?start="+e+"&end="+r)}catch(t){throw new Error("Error fetching blocks between "+e+" and "+r+".")}}async getLatestBlock(){try{return await this.fetchData("/latest/block")}catch(e){throw new Error("Error fetching latest block.")}}async getLatestHash(){try{return await this.fetchData("/latest/hash")}catch(e){throw new Error("Error fetching latest hash.")}}async getLatestHeight(){try{return await this.fetchData("/latest/height")}catch(e){throw new Error("Error fetching latest height.")}}async getProgram(e){try{return await this.fetchData("/program/"+e)}catch(e){throw new Error("Error fetching program")}}async getProgramObject(e){try{return a.$r.fromString(e)}catch(r){try{return a.$r.fromString(await this.getProgram(e))}catch(r){throw new Error(`${e} is neither a program name or a valid program`)}}}async getProgramImports(e){try{const r={},t=(e instanceof a.$r?e:await this.getProgramObject(e)).getImports();for(let e=0;e<t.length;e++){const n=t[e];if(!r.hasOwnProperty(n)){const e=await this.getProgram(n),t=await this.getProgramImports(n);for(const e in t)r.hasOwnProperty(e)||(r[e]=t[e]);r[n]=e}}return r}catch(e){throw h("Error fetching program imports: "+e)}}async getProgramImportNames(e){try{return(e instanceof a.$r?e:await this.getProgramObject(e)).getImports()}catch(e){throw new Error("Error fetching program imports with error: "+e)}}async getProgramMappingNames(e){try{return await this.fetchData("/program/"+e+"/mappings")}catch(e){throw new Error("Error fetching program mappings - ensure the program exists on chain before trying again")}}async getProgramMappingValue(e,r,t){try{return await this.fetchData("/program/"+e+"/mapping/"+r+"/"+t)}catch(e){throw new Error("Error fetching mapping value - ensure the mapping exists and the key is correct")}}async getStateRoot(){try{return await this.fetchData("/latest/stateRoot")}catch(e){throw new Error("Error fetching Aleo state root")}}async getTransaction(e){try{return await this.fetchData("/transaction/"+e)}catch(e){throw new Error("Error fetching transaction.")}}async getTransactions(e){try{return await this.fetchData("/block/"+e.toString()+"/transactions")}catch(e){throw new Error("Error fetching transactions.")}}async getTransactionsInMempool(){try{return await this.fetchData("/memoryPool/transactions")}catch(e){throw new Error("Error fetching transactions from mempool.")}}async getTransitionId(e){try{return await this.fetchData("/find/transitionID/"+e)}catch(e){throw new Error("Error fetching transition ID.")}}async submitTransaction(e){const r=e instanceof a.YW?e.toString():e;try{const e=await o(this.host+"/transaction/broadcast",{body:r,headers:{"Content-Type":"application/json"}});try{return await e.json()}catch(e){throw new Error(`Error posting transaction. Aleo network response: ${e.message}`)}}catch(e){throw new Error(`Error posting transaction: No response received: ${e.message}`)}}}class u{proverUri;verifierUri;cacheKey;constructor(e){this.proverUri=e.proverUri,this.verifierUri=e.verifierUri,this.cacheKey=e.cacheKey}}class l{cache;cacheOption;keyUris;async fetchBytes(e="/"){try{const r=await s(e),t=await r.arrayBuffer();return new Uint8Array(t)}catch(e){throw new Error("Error fetching data."+e)}}constructor(){this.keyUris=y,this.cache=new Map,this.cacheOption=!1}useCache(e){this.cacheOption=e}clearCache(){this.cache.clear()}cacheKeys(e,r){const[t,n]=r;this.cache.set(e,[t.toBytes(),n.toBytes()])}containsKeys(e){return this.cache.has(e)}deleteKeys(e){return this.cache.delete(e)}getKeys(e){if(console.debug(`Checking if key exists in cache. KeyId: ${e}`),this.cache.has(e)){const[r,t]=this.cache.get(e);return[a.zW.fromBytes(r),a.XV.fromBytes(t)]}return new Error("Key not found in cache.")}async functionKeys(e){if(e){let r,t,n;if("proverUrl"in e&&"string"==typeof e.proverUrl&&(r=e.proverUrl),"verifierUrl"in e&&"string"==typeof e.verifierUrl&&(t=e.verifierUrl),"cacheKey"in e&&"string"==typeof e.cacheKey&&(n=e.cacheKey),r&&t)return await this.fetchKeys(r,t,n);if(n)return this.getKeys(n)}throw Error("Invalid parameters provided, must provide either a cacheKey and/or a proverUrl and a verifierUrl")}async fetchKeys(e,r,t){try{if(this.cacheOption){t||(t=e);const n=this.cache.get(t);if(void 0!==n)return[a.zW.fromBytes(n[0]),a.XV.fromBytes(n[1])];{console.debug("Fetching proving keys from url "+e);const n=a.zW.fromBytes(await this.fetchBytes(e));console.debug("Fetching verifying keys "+r);const i=await this.getVerifyingKey(r);return this.cache.set(t,[n.toBytes(),i.toBytes()]),[n,i]}}{const t=a.zW.fromBytes(await this.fetchBytes(e));return[t,await this.getVerifyingKey(r)]}}catch(t){throw new Error(`Error: ${t} fetching fee proving and verifying keys from ${e} and ${r}.`)}}async transferKeys(e){if(w.has(e))return await this.fetchKeys(v.transfer_private.prover,v.transfer_private.verifier);if(m.has(e))return await this.fetchKeys(v.transfer_private_to_public.prover,v.transfer_private_to_public.verifier);if(k.has(e))return await this.fetchKeys(v.transfer_public.prover,v.transfer_public.verifier);if(j.has(e))return await this.fetchKeys(v.transfer_public_to_private.prover,v.transfer_public_to_private.verifier);throw new Error("Invalid visibility type")}async joinKeys(){return await this.fetchKeys(v.join.prover,v.join.verifier)}async splitKeys(){return await this.fetchKeys(v.split.prover,v.split.verifier)}async feePrivateKeys(){return await this.fetchKeys(v.fee_private.prover,v.fee_private.verifier)}async feePublicKeys(){return await this.fetchKeys(v.fee_public.prover,v.fee_public.verifier)}async getVerifyingKey(e){switch(e){case v.fee_private.verifier:return a.XV.fromString(v.fee_private.verifyingKey);case v.fee_public.verifier:return a.XV.fromString(v.fee_public.verifyingKey);case v.inclusion.verifier:return a.XV.fromString(v.inclusion.verifyingKey);case v.join.verifier:return a.XV.fromString(v.join.verifyingKey);case v.split.verifier:return a.XV.fromString(v.split.verifyingKey);case v.transfer_private.verifier:return a.XV.fromString(v.transfer_private.verifyingKey);case v.transfer_private_to_public.verifier:return a.XV.fromString(v.transfer_private_to_public.verifyingKey);case v.transfer_public.verifier:return a.XV.fromString(v.transfer_public.verifyingKey);case v.transfer_public_to_private.verifier:return a.XV.fromString(v.transfer_public_to_private.verifyingKey);default:return a.XV.fromBytes(await this.fetchBytes(e))}}}class p{account;keyProvider;host;networkClient;recordProvider;constructor(e,r,t){e?(this.host=e,this.networkClient=new f(e)):(this.host="https://vm.aleo.org/api",this.networkClient=new f(this.host)),this.keyProvider=r||new l,this.recordProvider=t}setAccount(e){this.account=e}setKeyProvider(e){this.keyProvider=e}setHost(e){this.host=e,this.networkClient.setHost(e)}setRecordProvider(e){this.recordProvider=e}async deploy(e,r,t,n,i,s){try{const r=a.$r.fromString(e);let t;try{t=await this.networkClient.getProgram(r.id())}catch(e){console.log(`Program ${r.id()} does not exist on the network, deploying...`)}if("string"==typeof t)throw`Program ${r.id()} already exists on the network, please rename your program`}catch(e){throw h(`Error validating program: ${e}`)}let o,c=s;if(void 0===s&&void 0!==this.account&&(c=this.account.privateKey()),void 0===c)throw"No private key provided and no private key set in the ProgramManager";try{i=t?await this.getCreditsRecord(r,[],i,n):void 0}catch(e){throw h(`Error finding fee record. Record finder response: '${e}'. Please ensure you're connected to a valid Aleo network and a record with enough balance exists.`)}try{o=t?await this.keyProvider.feePrivateKeys():await this.keyProvider.feePublicKeys()}catch(e){throw h(`Error finding fee keys. Key finder response: '${e}'. Please ensure your key provider is configured correctly.`)}const[q,f]=o;let u;try{u=await this.networkClient.getProgramImports(e)}catch(e){throw h(`Error finding program imports. Network response: '${e}'. Please ensure you're connected to a valid Aleo network and the program is deployed to the network.`)}const l=await a.L.buildDeploymentTransaction(c,e,r,i,this.host,u,q,f);return await this.networkClient.submitTransaction(l)}async execute(e,r,t,n,i,s,o,c,q,f,u){let l;try{l=await this.networkClient.getProgram(e)}catch(r){throw h(`Error finding ${e}. Network response: '${r}'. Please ensure you're connected to a valid Aleo network the program is deployed to the network.`)}let p,y=u;if(void 0===u&&void 0!==this.account&&(y=this.account.privateKey()),void 0===y)throw"No private key provided and no private key set in the ProgramManager";try{c=n?await this.getCreditsRecord(t,[],c,s):void 0}catch(e){throw h(`Error finding fee record. Record finder response: '${e}'. Please ensure you're connected to a valid Aleo network and a record with enough balance exists.`)}try{p=n?await this.keyProvider.feePrivateKeys():await this.keyProvider.feePublicKeys()}catch(e){throw h(`Error finding fee keys. Key finder response: '${e}'. Please ensure your key provider is configured correctly.`)}const[v,g]=p;if(!q||!f)try{[q,f]=await this.keyProvider.functionKeys(o)}catch(e){console.log(`Function keys not found. Key finder response: '${e}'. The function keys will be synthesized`)}let d;try{d=await this.networkClient.getProgramImports(e)}catch(e){throw h(`Error finding program imports. Network response: '${e}'. Please ensure you're connected to a valid Aleo network and the program is deployed to the network.`)}const w=await a.L.buildExecutionTransaction(y,l,r,i,t,c,this.host,d,q,f,v,g);return await this.networkClient.submitTransaction(w)}async executeOffline(e,r,t,n,i,s,o,c,q){let h=q;if(void 0===q&&void 0!==this.account&&(h=this.account.privateKey()),void 0===h)throw"No private key provided and no private key set in the ProgramManager";if(!o||!c)try{[o,c]=await this.keyProvider.functionKeys(s)}catch(e){console.log(`Function keys not found. Key finder response: '${e}'. The function keys will be synthesized`)}return console.log("Running program offline"),console.log("Proving key: ",o),console.log("Verifying key: ",c),a.L.executeFunctionOffline(h,e,r,t,n,!1,i,o,c)}async join(e,r,t,n,i,s,o){let c,q,f=o;if(void 0===o&&void 0!==this.account&&(f=this.account.privateKey()),void 0===f)throw"No private key provided and no private key set in the ProgramManager";try{c=n?await this.keyProvider.feePrivateKeys():await this.keyProvider.feePublicKeys(),q=await this.keyProvider.joinKeys()}catch(e){throw h(`Error finding fee keys. Key finder response: '${e}'. Please ensure your key provider is configured correctly.`)}const[u,l]=c,[p,y]=q;try{s=n?await this.getCreditsRecord(t,[],s,i):void 0}catch(e){throw h(`Error finding fee record. Record finder response: '${e}'. Please ensure you're connected to a valid Aleo network and a record with enough balance exists.`)}try{e=e instanceof a.PD?e:a.PD.fromString(e),r=r instanceof a.PD?r:a.PD.fromString(r)}catch(e){throw h("Records provided are not valid. Please ensure they are valid plaintext records.")}const v=await a.L.buildJoinTransaction(f,e,r,t,s,this.host,p,y,u,l);return await this.networkClient.submitTransaction(v)}async split(e,r,t){let n,i=t;if(void 0===i&&void 0!==this.account&&(i=this.account.privateKey()),void 0===i)throw"No private key provided and no private key set in the ProgramManager";try{n=await this.keyProvider.splitKeys()}catch(e){throw h(`Error finding fee keys. Key finder response: '${e}'. Please ensure your key provider is configured correctly.`)}const[s,o]=n;try{r=r instanceof a.PD?r:a.PD.fromString(r)}catch(e){throw h("Record provided is not valid. Please ensure it is a valid plaintext record.")}const c=await a.L.buildSplitTransaction(i,e,r,this.host,s,o);return await this.networkClient.submitTransaction(c)}async synthesizeKeys(e,r,t,n){let i,s=n;void 0===s&&(s=void 0!==this.account?this.account.privateKey():new a._q);try{i=await this.networkClient.getProgramImports(e);const n=await a.L.synthesizeKeyPair(s,e,r,t,i);return[n.provingKey(),n.verifyingKey()]}catch(e){throw h(`Could not synthesize keys - error ${e}. Please ensure the program is valid and the inputs are correct.`)}}async transfer(e,r,t,n,i,s,o,f,u){t=q(t);let l,p,y=u;if(void 0===y&&void 0!==this.account&&(y=this.account.privateKey()),void 0===y)throw"No private key provided and no private key set in the ProgramManager";try{l=i?await this.keyProvider.feePrivateKeys():await this.keyProvider.feePublicKeys(),p=await this.keyProvider.transferKeys(t)}catch(e){throw h(`Error finding fee keys. Key finder response: '${e}'. Please ensure your key provider is configured correctly.`)}const[v,g]=l,[d,w]=p;try{const e=[];c(t)?(o=await this.getCreditsRecord(n,[],o,s),e.push(o.nonce())):o=void 0,f=i?await this.getCreditsRecord(n,e,f,s):void 0}catch(e){throw h(`Error finding fee record. Record finder response: '${e}'. Please ensure you're connected to a valid Aleo network and a record with enough balance exists.`)}const m=await a.L.buildTransferTransaction(y,e,r,t,o,n,f,this.host,d,w,v,g);return await this.networkClient.submitTransaction(m)}createProgramFromSource(e){return a.$r.fromString(e)}creditsProgram(){return a.$r.getCreditsProgram()}verifyProgram(e){try{return a.$r.fromString(e),!0}catch(e){return!1}}async getCreditsRecord(e,r,t,n){try{return t instanceof a.PD?t:a.PD.fromString(t)}catch(t){try{const t=this.recordProvider;return await t.findCreditsRecord(e,!0,r,n)}catch(e){throw h(`Error finding fee record. Record finder response: '${e}'. Please ensure you're connected to a valid Aleo network and a record with enough balance exists.`)}}}}function c(e){return g.has(e)}function q(e){return d.has(e)?e:h(`Invalid transfer type '${e}'. Valid transfer types are 'private', 'privateToPublic', 'public', and 'publicToPrivate'.`)}const y="https://testnet3.parameters.aleo.org/",v={fee_private:{prover:y+"fee_private.prover.43fab98",verifier:"fee_private.verifier.f3dfefc",verifyingKey:"verifier1qygqqqqqqqqqqq8rjvqqqqqqqqq00ycqqqqqqqqqusvszqqqqqqqpnf6qyqqqqqqqqcd6qqqqqqqqqqvqqqqqqqqqqq0plfjy36deglp5xr0lk3rccawpqgztrnjusxnlkc8hz6879me8ty8y7rxzc3qqafadrmvz0v2aluqjwezzwkmj3q9vmr0xgk3arehjhppu7scsw6h4nj08z7fswhyq739ypuh67ff0f0sg8787aq4w80gqrn8e5kduw8h002rkjrw907zqxawqu7qmumx5zayg7k55rdzn05eg5sl8swr7fveuhud3gmf9xjsqzd9x9az5ls4s8cwjgc5lmvkhphy67q0g7qwzee7hyavg335j25mllnywrtjcwfejt55qxag7wvggqtmtc3al0gy6q83hql4wagk37e200592az7n525s80c4xwr92jr8dt40t3fyjxzszrc9umk95psswq82kkg25sh25s3mw5z3xt9qy2ftm8ec4a8l8rwfuxfujjrxxnhmrqs4wsunec3ukd4mur4fkj8enqqqv9n37e5fyag7e33rxsyp63u5rfs8hn26slsmdaqzvp2flcz506r0hqncdtt07nhulltlh5wyq4gpxsln5td2v0treu7t8wanhq6yv8hswxla7cf3w8nv4p233gz0ry9n7sj2uduredwtykw2ec3fs8fqrjkz8agg2xj8t9wden6spzdfcl7jlw4rgzv4hjqvh4cw40yhh8udv5g6vd0jhhfmqevezq0zs4x2q2m7u0hq9mkvulj950t9a5tcm6suycdlaky8t568jevkn3tf9uu5laevjumvahk4cxjxam85kq0l5qrycnmdzgvm7hr8cvl8a7qzcmjkwh48krtxtduhcfn7hvt752slm0nvth0yf35jugxg7ah2kw5emcq4mk962eypxyvwahf4k5ql8376l5za4zvv2p7jzgkjjs4lc60nv3czmdmmc0qn5mwnlnaxmwazs3qzfea0z0sn3nflp8v2lwlczljxre975fnvw3vfyrrjze4wuxtkjg7j37fph"},fee_public:{prover:y+"fee_public.prover.634f153",verifier:"fee_public.verifier.09eeb4f",verifyingKey:"verifier1qygqqqqqqqqqqqrcxyqqqqqqqqq8yvgqqqqqqqqqndesqqqqqqqqpg56qqqqqqqqqqhyyqqqqqqqqqqvqqqqqqqqqqq9a3p0z8q2qzsgq6lsd3zeh3tvezv0d2wg9tykutk9s7dat8uyamgxv54vv5le5slhta92cs08905qy0mgfdx0r7hzc7ec4qn8wmkx2cvtrwggad5h898kkp20eheukemkhj6g37flhpmxq9hpk9q2kfcsr58ufzupqpgfthzxsrn0554ttqckrgfwjfnvpfqhy4evahxkzahkf85pqt0es3j5jc2kzpkcu4ausrm4k53evjtuy3tzc3jgwl7y5t79j0ddhprs6ls9x0qpvqggvkffjg0psvjrmf2rsw5xrdnmqxlx5qru82dsavaka5kfsvxgyrzdf4tzceghyeqpk55308pkc0sg63sgwt8fywksccjdkkrqkh00kgraeuq97zsydp9z6pagtqmaply94dacmk7qkgg5jt36exjxcjdckjgswc5agg9xd4lqmpxxmtur7d7ecvvpg5rg4mzlf65hlpeynczqwdgrdekx7m3n4ljumgezxyzq7h9wmnrqfawayl5gns8gv2jaucwc9qmcq7pj6kvddw8dgpdf0rh66a6erzj9fmupu8ulc2x64092k5sfdm6rlaktdv8fscn8wlct0p9xahl2qqnxsw3tfzms5xplll4xamrlhtjm2xfsqmx62er2lmmzn6wk8788hcpg7uetlrufwlvmapeh00h9aqql6ggsknvwt45wjmfkky7z5ukly3dpjqvqt3yl839d8flcx6kpf5vqvdm57kqdwjazcmfn4ae87yqg08dlw805prfrfjvlyff3kq09z2yxc0pcaqalj7r4e6lygruk2ezpkfjlslyjtek6rtgvfwavqa5pmp6jgmr8xzu5dk0lcmfgm0plw8jkwt60pz2scpuh78k7f4dlfp7grjpn3xtdphhsn0k8rpfwqq3qr6huef2asc990ragxknla7kdl76xr2g2vl8pnql3f58wgcptked7rgeah8"},inclusion:{prover:y+"inclusion.prover.cd85cc5",verifier:"inclusion.verifier.e6f3add",verifyingKey:"verifier1qyyqqqqqqqqqqqzq7qqsqqqqqqq0huqpqqqqqqqqjvksgqqqqqqqqnypqgqqqqqqqzk8sqcqqqqqqqqvqqqqqqqqqqqxsh33gk03qelqrvy0g5m2km5vfhs6flwsutadvdl3nd82a3xqunx8pgaccs2yh654tpnanywulgvpvfxuma59ufttju8mvnpmuhg720p6fawv4ynhe75vfhn3te00saqpd5kpgxw59gf4r3ng3z0hr49gpwlwgkac7zlqk7cne5xh33m96qep9xeu2nf68dye57yqrnqgtaa2vk3ldcpurjn3s4pavzde8cehsrqn57qm2ewew3t4g6css5qzgfywdkkrx0rmz5u68cxvrwaksjd4s2exerl3u7cae58tc383yzd5tqxk66xqldl3ch8ymq73jhufwfcp4r8vcynmjenzt355a3qnejfndw7v5sn9a63wrd86rczgrp8wsuqsth7346q3qgaddsj6ln92233jjvke2krn809qvt8ev940hfclr5etza54055m8upn5jhg224v27cqamjy5lv3qm5nyc9asy0tqz0xsgmkuyp75t2qgv3h9s4av3u5tpmf8qkf7k7gp8rjlf67uncphscspvlmku59mgn4cqlxqqz3qdsyycs2my3emuyj9vnzt0464rfgnnmxwnw4kkqe50f764fjauj73kqcsxzn5mecv507xnetxvhfkt79r6hfvf6nzl735xtfp4r7uxlns3dazwj9mgl4fayzv0nqprh80ydqtq9tl6ffcmav2mlsky8tdrunewu3z8a2qg5wfhxz4j0xsqzfsr50ts63g0wysvnkt4rd6equa0r6fsqhrsjft0qy4jnstawrmnj28llqfgemj868y6aaw5rjftgp5vezg7r2c4q5zeupt4gghwand0jeyv5qfnxtnzh7wflxh7tdd0q6zh2fy635xhmllux8hk946t3kzenmc0355mz309gfachp2verz2qaepxsrj63nr54uga9eh2xcgp85v90dellhsvyx73m2w2qyed52svs62ysg7e3ag"},join:{prover:y+"join.prover.1a76fe8",verifier:"join.verifier.4f1701b",verifyingKey:"verifier1qygqqqqqqqqqqqz2cvqqqqqqqqqx0scqqqqqqqqqc42qzqqqqqqqpvmfqyqqqqqqqquzwqgqqqqqqqqvqqqqqqqqqqqpz6knqjfm77py0mpx68rmc6yavzrjpn3vdn5rmhum6u47fxt3j7auv5mk8epjx0hsa7nfm4llzwqqj84x9cnerm5gach0nzfy0jsvfrylvld5ffe8g63nhw5qng68rs6yrlzrc5229ezc8j4n4y0f2hrqqmdphh3mpglur7evq52n6mx9nls064fpn8wr3vqz75vextjhjmpvcrgs8har5txjnh9tj8lmlusns8nklkw8dh8nc8sv0llh4cgw95l3m7mwugu5nfrrlmyccnmrues4wl0hdfwsq8wvn60y2hl036g3aqzh5cn6n2366fy4hawjn22mj86w2w7twq80pdrea6svl7uq5zyh9nz4qgd72tql95n2xx0zh3wcjyqca5wzv4276exszaunpjduuvjmture49av40ve03akc9qw709wuf9a8hhpwlwwz8acf2z5ngk2d95qzfqhkmllqx4lnupyevkn8zthgu54x55t4cqm7uvmmnu3vtvkmsr4tldemm26shwk8ux27v6lmxkqppuesjj5d3m7x5rsg7yn8cg6hkat6fy8u8zj3n0z26ehqvmq8x2fadtw5jt6pxxfp3cm40ak7x9yqym5qrwjzpr7xwr4t6pjn5ca9g02hnuyvxd9jqpv70a7w05mqatnyzhnfl462xmsehgcwczjkrzz2qxk3wa0elrnvnh9qlz3cc2g8xyag9yrds0jepsvskl55zqtntp6qvkj9nkmlercd95j8g9xdgxv0sq0y6gq32ng5r9zcs4wt3vryhldxtr9epyz5vnnx4mf2lhv4r56mftaugjemxezpjcv9enr259tf7qq66a7ngsc3y0a5jlm8jg2rnd9c38ny2m5egl7ssx62zcscztkmjqpkvta2za4ym5jkatgzd2zspfcrc7gesjxjgcvhsua3jpyzpdan6mestyqsx5eatkmzv9zmpwkur3c34sjzc"},split:{prover:y+"split.prover.e6d12b9",verifier:"split.verifier.2f9733d",verifyingKey:"verifier1qygqqqqqqqqqqqpehuqqqqqqqqq930cqqqqqqqqq295qzqqqqqqqqyyyqyqqqqqqqzjjvqgqqqqqqqqvqqqqqqqqqqqyjhdhawnd33kv88ehql385slkd7lyr46jnf7yathmnxnr7at2j6u4nfkkvryujwt8rvhdfpuw94qq8e7sp33sjtyz53q89k85ttcg2cvadvuadeuq5xn4hgkmvm3qj93er0t2pjpd2p4kd3zy2gqmqd5qpfzdk973253ufzafqwd9879c7wpdv500a4xhetxkareamyl2qqzdd5hxl94vnmrkluzx0te32rkusqs20xswldqdgekfh6p25yxjhls20k59lsfn9az8jak9lr6r745ujsq0jq9fvugqyqchuca8xq6stq0svvu7e4xguc84t3s72erg4ve2z3nsr3jqv6jtala9j3xf5msksupprwwxkwwl58pv2hmr4g5h4xqym3nj6ax7ujx70np7egc4nw0w3j02m34eq00gssjq0pf9xfltxtef29crye3sul45kkawnrl6uzvquszlgltwtgx2xjlehgh0xpdm68dyjev9qxsleetpc33mns5jakrmqqryk8qgmnc56dzgcwm99eccq6c93576s946jztmuvgp8522y00jpck54wlcg3me44sk8usehsnjgm85zmypjsf7nlp06na927dtqp7u45jnd3em0n9h0wgtgvwh7lyhq4guwdfxws8mswwzfr5fjdtv0smjeq3r58v03amrhgr2ex4h7q8wapp8h5ug8vh0fxkt6yp3l2mas3l0jmmpedy9vx4lnxmjwn8t4wxyrdnnr54jxmp0wyu3sf6wwkqa6r2g2u9qu5km92fjnckme07mrxghuxh9ktpj9cvaf08sccdtdwjsnkyt9qu2x5ft27tkrskudrqpyr63x640xlk9wqpmy3edx58wxwzesmx22v62y6lshjv3wur83jlmwm74qqpd34ewmrk7eg0jfp7cretx5jwfv5c904v9qazfyluh5fpdczgx9fluayuukfwnqjq8tdwx3shuy5"},transfer_private:{prover:y+"transfer_private.prover.2b487c0",verifier:"transfer_private.verifier.3a3cbba",verifyingKey:"verifier1qygqqqqqqqqqqqqvccqqqqqqqqqz43sqqqqqqqqq7jqqzqqqqqqqpj4vqyqqqqqqqq0zuqgqqqqqqqqvqqqqqqqqqqqyvnz4pl9kjr0ks3dtkz67gw8tyqzs3sxskt8xg6keqrrqk9nj3e39kg65lzz5sd5tug2ecrpmfg5peseqmv709nry8up96qwsuvpp8684njpe4qunfhf7ywc0a7lck9rdlfcred8krn60lgztx4wlrlmspnnkwe9gmqk07tt5lj3wxcpucpshz7ec6w5mqvspprmu88lr9tr9e7a9fqdye0jdajq46pt35hdjsruamruf6v73fu68hv5fcsndmfq3c65yjrmljfg3343vj8cca2js2gumrks9eepm3d7g02jw0se9eqpaj86kpscxu4vuvw7jedgt2c0l4fk5zqwdu3vfhrazjwedl5d0n9w75ky0924qjjzg3c04dw7p8uqxqnuph6d3d935zqavxtte336jmnpk0hkjn80cejqfljl7w6jtnl3tedhtdk4cx207c7lud9xagzcp760x47h3hrw68syru4rnr3zgy99wcpnglpjvndzrjpc3z8c53xyqx0jh8cnt6gn92fgqu8a5huespxgnckqgttq8aa7xngxt9f5lpq2zgakfhtfvhlcy66k3depln3x67ck2m9t0fvnetjygj6h2er2fqqwcf2ghjp5fvq4e68635ql0lv5uv4c82575dcv87a0y8745g6gvjenh49zppsekc82dect9ggp3aqxqnc73dmd38pe4x7v9wwv6namfe7337tczyfz47dyxxzy8fslktv47yn8r87n0nap5qlc9gzgd2yq8m6zj0ulzgaqls2dq2atkfzxu5rjguvcjxnmn7hr8uxgxuzrwtmcftz4emn24vpq5pcwxf29a7w5p80e7f2tv7ags5k0pj9fghaklzm5xrakpsk3gv4xzvzqj6u2denjw60q777r5889xqrvchhtac4xspue4mncvgerscq4dslzkt4mg4zuv6t6gahcvnm2p6r02ns62xsdexs8jxt"},transfer_private_to_public:{prover:y+"transfer_private_to_public.prover.1ff64cb",verifier:"transfer_private_to_public.verifier.d5b60de",verifyingKey:"verifier1qygqqqqqqqqqqqrwjvqqqqqqqqqgpycqqqqqqqqquvvqzqqqqqqqqceuqyqqqqqqqqyd6qqqqqqqqqqvqqqqqqqqqqqr8z97pzqh2lxcc4tasdu784svuk6lv62sj78flptnzqks3hyu42ymryngdzr2mw6j4nxm4cmx8tgqnfzdkccekds6nhs4c7t2hf84d38jkuufdrf43ls4zm9htqarx9mv3gswcxp74kelgy36yhpsrfkgzdr8vy8580sulvaw36pxjjv0j543rml679z305kt2ju3wzarmsukzkfp56qnc0pjuptzajkes95uspd0uz3fd9fu5vmxwfwq9cj5qh0yjq398h729yygdm0fzkrl9g6faevalks3yc7xl3le38k77t3exqqnn82yyjpunpn763s8hkaguvn67jehqcvt8tvhql8skpesm9tm2hgeryk934h8c8cdcgynjq5cj2qer7kkjc2rrmg5j6agac0ya88up0sl2skxsvkw0rgxlgxjtjqc4g8c3xssq2sk6e2dufvc480rj8vqcrhtqsjqdkzq3nanlvngrjxchnzwfywwjphj5jeza2lyynrk5awz8v6jtwgxu2fs6uqrykz5lz6qpt2dfs670clhjpagxny40nmgeqtf9w8hu4v7yjpgwpv89v05u2ahdryu4538augkjhdx3hvfahwuszd8zyqmcxhrcq039hcrkd5qgadhj257vvrf27dwu64kl0j237efzvt5d360umxw3xk6tej5cxv9zqxqzc7ryqndhttaw5act9kwt8kvxtdjnzy99q8gzmg2429f94h6csrqejzc4n40xjcsdwn98hdekyqzytrh35w6t3r5d86kqt897kv5mldx9w06h4rldk734hvn096gt7e4smleja7canyfpv798cksshgq7hkyt6elvzp3rpj9nd84ykt9lzgjsswn4y8934ay3575u3sx7mkeuca0zsere2q0jmlsl6w6v2qcq424uhnmqn9q5vw22jgy94pry2junps40ug867d79h2zvd0n02nmlz05hd"},transfer_public:{prover:y+"transfer_public.prover.a74565e",verifier:"transfer_public.verifier.a4c2906",verifyingKey:"verifier1qygqqqqqqqqqqqq79uqqqqqqqqqp2tcqqqqqqqqqwd4qqqqqqqqqp5ydqqqqqqqqqqvyqqqqqqqqqqqvqqqqqqqqqqqre7drur40rst43dq9at346py7hkmrhexarf59f2tjt4stlsdj5uwrgnrkjjej7jf3djk2w4njtxcq0mezac793craujm8mr7wutcqtu2aday5g03wl0cu2572fsrtpyjhdyqlh0447z7dshlkhksjsusgp4ezrvc0n64fwetfmml3kvfg7n03w2e602sl7et4cpw98hgpzxwzrmzu8r3x77v49njysy2lp55xsqh6t5qjvhyl5a7nzy3e73y7dzvvs9p450u0s8g84prqnrk6jeah89c6882uzqdvxgzcedfmsc43uq99n3ycrjh70ys8n02pyvdvzmu7z608desdd5yw9dc8v3ddrdddmrzz2pupe09yn9esy25cfzmd0wqcgjdxm4dvlt2t6k66lw8e9ccj49qj2ahpht62kh7p56xpvpekenq2arng2t55mwxe59mqpkp6a0yqlwt7tdf98rt3kqlr9tdtq6hua3wrka0mqzhva4nhucxn9u4w92mly69jy2c7cqm5ftnk3m0qxy9spaxwfz0xkqd947yvf2zh8h4y59fltxdpeu4utpv9zw0cr7ad9d462qxyc2f05lezw6dwhcmep942qqv38lp3x9efestt5pk8rplvmrk0zz9zel48l8h9ldfzyd8zyr7knze92cdyanez6k7q5fu6tnw9wqrywjnhevaujz20xn0h3n47g85zs6ejfh7z8jt9qjesqgmdymvcxlceudkdsl49t5r69c4mg7hfwyq88z7zn0efda8fdjmhz8aaq24q34g2ekdzr5w9em3cev2ktxtmupqwltu0nh3fjzm04cy3cgnqlnqq0chzq4rs2dmfjwryxrxxgjtdcsnn9fpwykkxwfuervtznu3lmvhhpdflgwgm0xklu6c0xsxt9dfcp29w2nz6zkjetz7cqremg68eqxq86rn082czp50ldw9qkq6w3p9xxg4hrg"},transfer_public_to_private:{prover:y+"transfer_public_to_private.prover.1bcddf9",verifier:"transfer_public_to_private.verifier.b094554",verifyingKey:"verifier1qygqqqqqqqqqqqrhvqqqqqqqqqq8kcqqqqqqqqqqu0xsqqqqqqqqqw0kqqqqqqqqqreg7qqqqqqqqqqvqqqqqqqqqqqta360tn6dhv5z559ejfahwq88lxtd498py5p3vw5u3rwtfvdzpxq7fuqdahsrennq80g8yc6wqjyq8ahdv3jzry0mxceed0jr2cd0wye3e7782pg3phsu8h7hcapfgdghcgg2ykfc2682xefhsp3plqnqp692097k4ja82ecc2descl4d6csug04cz2j9a5pk3djx6xde2ghgq7uqvuhsg47ksueeetvc7mh2qpvqjmph9eekp5waqunkeea9vkvzyl8culmn5t7l9ke3r7uz8v5r8njjdkug6va9vy6axx9aq2kxaqdd9ll2m3j7qg7eyq3k2pnhq7gx2kv8vm3yf5pyqtywt2hvur5uv45y5st53qh970dktd3k709d9sqwv0d6qaksxjcp2cxu282hcewhy66vfs5kp35e6k4shdmjzmglyqqcsnupv8xwdr3596qypzshnuuq8rpm8pyjwtws63wsazqt8tlqhkkxucf0zjc384wvv2jemdnjwd6hn9745h8qc4kqp0rzs9wkx0hcp22xzuyyk7gpsc9ahw7pdenpje3etp37lfrcuntehl8wm2eudrh0j04szjzrv0n3r2gv04mgau5ysqtdcddq44xtt6t6f08c9zuhqukk8zy75jru0exufnh74u97d4xwe005ug7ywmcnyz8u6nvdav2xxqqzpg0luhghl8xu7g0cjgxse0lnqqedc7cc47nc048h2t44gedjq7f49ghajc9gwclp962v4q2855qvgdtkmr29cpwwq8vghlcjv0g6k0a0xa8yrmmnd5l7umnuqcd4x9rcejc3mkjgpw8y6mue2n5tx9cpahnw37yey5k38j98dnr9jss00420jvk7nh59hul7ef69n8ktcltl8f0t93rya5y8d2cspyjp6c7crvg2d4m37z78dualsqr9u7vtge07psdtl4l9785fxl3wgf9u277puvgvuq"}},g=new Set(["transfer_private","private","transferPrivate","transfer_private_to_public","privateToPublic","transferPrivateToPublic"]),d=new Set(["transfer_private","private","transferPrivate","transfer_private_to_public","privateToPublic","transferPrivateToPublic","transfer_public","public","transferPublic","transfer_public_to_private","publicToPrivate","transferPublicToPrivate"]),w=new Set(["private","transfer_private","transferPrivate"]),m=new Set(["private_to_public","privateToPublic","transfer_private_to_public","transferPrivateToPublic"]),k=new Set(["public","transfer_public","transferPublic"]),j=new Set(["public_to_private","publicToPrivate","transfer_public_to_private","transferPublicToPrivate"]);function h(e){throw console.error(e),e}n()}catch(x){n(x)}}))},9669:(e,r,t)=>{t.a(e,(async(e,r)=>{try{var n=t(5052),a=t(6891),i=t(9933),s=e([n,i]);[n,i]=s.then?(await s)():s,await(0,i.CK)();const q="https://vm.aleo.org/api",h=new n.AleoKeyProvider,f=new n.ProgramManager(q,h,void 0);h.useCache(!0);let u="";async function o(e,r,t,a,s=!1){console.log("Web worker: Executing function locally...");let o=performance.now();try{const c=f.createProgramFromSource(e);if(c instanceof Error)throw"Error creating program from source";const q=c.id();if(!c.hasFunction(r))throw`Program ${q} does not contain function ${r}`;const l=`${q}:${r}`,p=await f.networkClient.getProgramImports(e);if(p instanceof Error)throw"Error getting program imports";if(u!==e){const n=await f.synthesizeKeys(e,r,t,i._q.from_string(a));f.keyProvider.cacheKeys(l,n),u=e}const y=new n.AleoKeyProviderParams({cacheKey:l});let v=await f.executeOffline(e,r,t,s,p,y,void 0,void 0,i._q.from_string(a));console.log(`Web worker: Local execution completed in ${performance.now()-o} ms`);const g=v.getOutputs(),d=v.getExecution();let w="";const m=h.getKeys(l);if(m instanceof Error)throw"Could not get verifying key";const k=m[1];return d?((0,i.hz)(d,k,c,"hello"),w=d.toString(),console.log("Execution verified successfully: "+d)):w="",console.log(`Function execution response: ${g}`),{outputs:g,execution:w}}catch(e){return console.error(e),e?e.toString():"Unknown error"}}async function c(){return(new i._q).to_string()}const l={executeOffline:o,getPrivateKey:c};(0,a.Jj)(l),r()}catch(p){r(p)}}),1)},6891:(e,r,t)=>{t.d(r,{Jj:()=>h});const n=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),i=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.finalizer"),o=Symbol("Comlink.thrown"),c=e=>"object"==typeof e&&null!==e||"function"==typeof e,q=new Map([["proxy",{canHandle:e=>c(e)&&e[n],serialize(e){const{port1:r,port2:t}=new MessageChannel;return h(e,r),[t,[t]]},deserialize(e){return e.start(),v(e,[],r);var r}}],["throw",{canHandle:e=>c(e)&&o in e,serialize({value:e}){let r;return r=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[r,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function h(e,r=globalThis,t=["*"]){r.addEventListener("message",(function a(i){if(!i||!i.data)return;if(!function(e,r){for(const t of e){if(r===t||"*"===t)return!0;if(t instanceof RegExp&&t.test(r))return!0}return!1}(t,i.origin))return void console.warn(`Invalid origin '${i.origin}' for comlink proxy`);const{id:c,type:q,path:u}=Object.assign({path:[]},i.data),l=(i.data.argumentList||[]).map(m);let p;try{const r=u.slice(0,-1).reduce(((e,r)=>e[r]),e),t=u.reduce(((e,r)=>e[r]),e);switch(q){case"GET":p=t;break;case"SET":r[u.slice(-1)[0]]=m(i.data.value),p=!0;break;case"APPLY":p=t.apply(r,l);break;case"CONSTRUCT":p=function(e){return Object.assign(e,{[n]:!0})}(new t(...l));break;case"ENDPOINT":{const{port1:r,port2:t}=new MessageChannel;h(e,t),p=function(e,r){return d.set(e,r),e}(r,[r])}break;case"RELEASE":p=void 0;break;default:return}}catch(e){p={value:e,[o]:0}}Promise.resolve(p).catch((e=>({value:e,[o]:0}))).then((t=>{const[n,i]=w(t);r.postMessage(Object.assign(Object.assign({},n),{id:c}),i),"RELEASE"===q&&(r.removeEventListener("message",a),f(r),s in e&&"function"==typeof e[s]&&e[s]())})).catch((e=>{const[t,n]=w({value:new TypeError("Unserializable return value"),[o]:0});r.postMessage(Object.assign(Object.assign({},t),{id:c}),n)}))})),r.start&&r.start()}function f(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function u(e){if(e)throw new Error("Proxy has been released and is not useable")}function l(e){return k(e,{type:"RELEASE"}).then((()=>{f(e)}))}const p=new WeakMap,y="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const r=(p.get(e)||0)-1;p.set(e,r),0===r&&l(e)}));function v(e,r=[],t=function(){}){let n=!1;const s=new Proxy(t,{get(t,a){if(u(n),a===i)return()=>{!function(e){y&&y.unregister(e)}(s),l(e),n=!0};if("then"===a){if(0===r.length)return{then:()=>s};const t=k(e,{type:"GET",path:r.map((e=>e.toString()))}).then(m);return t.then.bind(t)}return v(e,[...r,a])},set(t,a,i){u(n);const[s,o]=w(i);return k(e,{type:"SET",path:[...r,a].map((e=>e.toString())),value:s},o).then(m)},apply(t,i,s){u(n);const o=r[r.length-1];if(o===a)return k(e,{type:"ENDPOINT"}).then(m);if("bind"===o)return v(e,r.slice(0,-1));const[c,q]=g(s);return k(e,{type:"APPLY",path:r.map((e=>e.toString())),argumentList:c},q).then(m)},construct(t,a){u(n);const[i,s]=g(a);return k(e,{type:"CONSTRUCT",path:r.map((e=>e.toString())),argumentList:i},s).then(m)}});return function(e,r){const t=(p.get(r)||0)+1;p.set(r,t),y&&y.register(e,r,e)}(s,e),s}function g(e){const r=e.map(w);return[r.map((e=>e[0])),(t=r.map((e=>e[1])),Array.prototype.concat.apply([],t))];var t}const d=new WeakMap;function w(e){for(const[r,t]of q)if(t.canHandle(e)){const[n,a]=t.serialize(e);return[{type:"HANDLER",name:r,value:n},a]}return[{type:"RAW",value:e},d.get(e)||[]]}function m(e){switch(e.type){case"HANDLER":return q.get(e.name).deserialize(e.value);case"RAW":return e.value}}function k(e,r,t){return new Promise((n=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function r(t){t.data&&t.data.id&&t.data.id===a&&(e.removeEventListener("message",r),n(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},r),t)}))}}},o={};function c(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}};return s[e](t,t.exports,c),t.exports}c.m=s,c.x=()=>{var e=c.O(void 0,[933],(()=>c(9669)));return e=c.O(e)},e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(a,i,s)=>{var o;s&&((o=[]).d=-1);var c,q,h,f=new Set,u=a.exports,l=new Promise(((e,r)=>{h=r,q=e}));l[r]=u,l[e]=e=>(o&&e(o),f.forEach(e),l.catch((e=>{}))),a.exports=l,i((a=>{var i;c=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var i=[];i.d=0,a.then((e=>{s[r]=e,n(i)}),(e=>{s[t]=e,n(i)}));var s={};return s[e]=e=>e(i),s}}var o={};return o[e]=e=>{},o[r]=a,o})))(a);var s=()=>c.map((e=>{if(e[t])throw e[t];return e[r]})),q=new Promise((r=>{(i=()=>r(s)).r=0;var t=e=>e!==o&&!f.has(e)&&(f.add(e),e&&!e.d&&(i.r++,e.push(i)));c.map((r=>r[e](t)))}));return i.r?q:s()}),(e=>(e?h(l[t]=e):q(u),n(o)))),o&&o.d<0&&(o.d=0)},a=[],c.O=(e,r,t,n)=>{if(!r){var i=1/0;for(h=0;h<a.length;h++){for(var[r,t,n]=a[h],s=!0,o=0;o<r.length;o++)(!1&n||i>=n)&&Object.keys(c.O).every((e=>c.O[e](r[o])))?r.splice(o--,1):(s=!1,n<i&&(i=n));if(s){a.splice(h--,1);var q=t();void 0!==q&&(e=q)}}return e}n=n||0;for(var h=a.length;h>0&&a[h-1][2]>n;h--)a[h]=a[h-1];a[h]=[r,t,n]},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>e+".bundle.js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var r=c.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),(()=>{c.b=self.location+"";var e={530:1};c.f.i=(r,t)=>{e[r]||importScripts(c.p+c.u(r))};var r=self.webpackChunkaleo_website=self.webpackChunkaleo_website||[],t=r.push.bind(r);r.push=r=>{var[n,a,i]=r;for(var s in a)c.o(a,s)&&(c.m[s]=a[s]);for(i&&i(c);n.length;)e[n.pop()]=1;t(r)}})(),i=c.x,c.x=()=>c.e(933).then(i);c.x()})();
//# sourceMappingURL=530.bundle.js.map