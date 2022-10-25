// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      4: [ctc0, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Distributor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Distributor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Distributor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    drugToken: ctc0,
    price: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Address;
  
  
  const v241 = stdlib.protect(ctc2, await interact.getDrugs(), {
    at: './index.rsh:20:60:application',
    fs: ['at ./index.rsh:19:19:application call to [unknown function] (defined at: ./index.rsh:19:23:function exp)'],
    msg: 'getDrugs',
    who: 'Distributor'
    });
  const v242 = v241.drugToken;
  const v243 = v241.price;
  
  const txn1 = await (ctc.sendrecv({
    args: [v243, v242],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v247, v248], secs: v250, time: v249, didSend: v32, from: v246 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v248
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v247, v248], secs: v250, time: v249, didSend: v32, from: v246 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v246, v247, v248],
    evt_cnt: 0,
    funcNum: 1,
    lct: v249,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:15:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '10'), v248]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v257, time: v256, didSend: v39, from: v255 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '10'),
        kind: 'to',
        tok: v248
        });
      const v265 = stdlib.checkedBigNumberify('./index.rsh:32:51:decimal', stdlib.UInt_max, '0');
      const v266 = stdlib.checkedBigNumberify('./index.rsh:32:48:decimal', stdlib.UInt_max, '0');
      const v267 = v256;
      
      if (await (async () => {
        const v282 = stdlib.lt(v266, stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '10'));
        
        return v282;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v338 = stdlib.safeMul(v266, v247);
        sim_r.txns.push({
          kind: 'from',
          to: v246,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v248
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v257, time: v256, didSend: v39, from: v255 } = txn2;
  ;
  ;
  const v264 = stdlib.addressEq(v246, v255);
  stdlib.assert(v264, {
    at: './index.rsh:26:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Distributor'
    });
  let v265 = stdlib.checkedBigNumberify('./index.rsh:32:51:decimal', stdlib.UInt_max, '0');
  let v266 = stdlib.checkedBigNumberify('./index.rsh:32:48:decimal', stdlib.UInt_max, '0');
  let v267 = v256;
  
  let txn3 = txn2;
  while (await (async () => {
    const v282 = stdlib.lt(v266, stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '10'));
    
    return v282;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v300], secs: v302, time: v301, didSend: v159, from: v299 } = txn4;
    undefined /* setApiDetails */;
    const v304 = v300[stdlib.checkedBigNumberify('./index.rsh:36:10:spread', stdlib.UInt_max, '0')];
    const v305 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '10'), v266);
    const v306 = stdlib.le(v304, v305);
    stdlib.assert(v306, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:38:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:36:39:application call to [unknown function] (defined at: ./index.rsh:36:39:function exp)', 'at ./index.rsh:36:39:application call to [unknown function] (defined at: ./index.rsh:36:39:function exp)'],
      msg: 'too many',
      who: 'Distributor'
      });
    const v308 = stdlib.safeMul(v247, v304);
    ;
    ;
    const v325 = stdlib.safeAdd(v266, v304);
    const v326 = [v325, v304];
    await txn4.getOutput('Pharmacy_purchase', 'v326', ctc4, v326);
    const v336 = stdlib.safeAdd(v265, stdlib.checkedBigNumberify('./index.rsh:44:42:decimal', stdlib.UInt_max, '1'));
    const cv265 = v336;
    const cv266 = v325;
    const cv267 = v301;
    
    v265 = cv265;
    v266 = cv266;
    v267 = cv267;
    
    txn3 = txn4;
    continue;
    
    }
  const v338 = stdlib.safeMul(v266, v247);
  ;
  return;
  
  
  
  
  };
export async function _Pharmacy_purchase4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Pharmacy_purchase4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Pharmacy_purchase4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Null;
  
  
  const [v246, v247, v248, v265, v266] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1]);
  const v285 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:36:39:application call to [unknown function] (defined at: ./index.rsh:36:39:function exp)', 'at ./index.rsh:36:39:application call to [unknown function] (defined at: ./index.rsh:36:39:function exp)'],
    msg: 'in',
    who: 'Pharmacy_purchase'
    });
  const v286 = v285[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v288 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '10'), v266);
  const v289 = stdlib.le(v286, v288);
  stdlib.assert(v289, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:36:39:application call to [unknown function] (defined at: ./index.rsh:36:39:function exp)', 'at ./index.rsh:36:39:application call to [unknown function] (defined at: ./index.rsh:36:39:function exp)'],
    msg: 'too many',
    who: 'Pharmacy_purchase'
    });
  
  const v298 = stdlib.safeMul(v247, v286);
  
  const txn1 = await (ctc.sendrecv({
    args: [v246, v247, v248, v265, v266, v285],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v298, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v300], secs: v302, time: v301, didSend: v159, from: v299 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Pharmacy_purchase"
        });
      const v304 = v300[stdlib.checkedBigNumberify('./index.rsh:36:10:spread', stdlib.UInt_max, '0')];
      const v308 = stdlib.safeMul(v247, v304);
      sim_r.txns.push({
        amt: v308,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v299,
        tok: v248
        });
      const v325 = stdlib.safeAdd(v266, v304);
      const v326 = [v325, v304];
      const v327 = await txn1.getOutput('Pharmacy_purchase', 'v326', ctc4, v326);
      
      const v336 = stdlib.safeAdd(v265, stdlib.checkedBigNumberify('./index.rsh:44:42:decimal', stdlib.UInt_max, '1'));
      const v434 = v336;
      const v435 = v325;
      const v437 = stdlib.lt(v325, stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '10'));
      if (v437) {
        sim_r.isHalt = false;
        }
      else {
        const v438 = stdlib.safeMul(v325, v247);
        sim_r.txns.push({
          kind: 'from',
          to: v246,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v248
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v300], secs: v302, time: v301, didSend: v159, from: v299 } = txn1;
  undefined /* setApiDetails */;
  const v304 = v300[stdlib.checkedBigNumberify('./index.rsh:36:10:spread', stdlib.UInt_max, '0')];
  const v305 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '10'), v266);
  const v306 = stdlib.le(v304, v305);
  stdlib.assert(v306, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:36:39:application call to [unknown function] (defined at: ./index.rsh:36:39:function exp)', 'at ./index.rsh:36:39:application call to [unknown function] (defined at: ./index.rsh:36:39:function exp)'],
    msg: 'too many',
    who: 'Pharmacy_purchase'
    });
  const v308 = stdlib.safeMul(v247, v304);
  ;
  ;
  const v325 = stdlib.safeAdd(v266, v304);
  const v326 = [v325, v304];
  const v327 = await txn1.getOutput('Pharmacy_purchase', 'v326', ctc4, v326);
  if (v159) {
    stdlib.protect(ctc5, await interact.out(v300, v327), {
      at: './index.rsh:36:11:application',
      fs: ['at ./index.rsh:36:11:application call to [unknown function] (defined at: ./index.rsh:36:11:function exp)', 'at ./index.rsh:43:12:application call to "ret" (defined at: ./index.rsh:39:36:function exp)', 'at ./index.rsh:39:36:application call to [unknown function] (defined at: ./index.rsh:39:36:function exp)'],
      msg: 'out',
      who: 'Pharmacy_purchase'
      });
    }
  else {
    }
  
  const v336 = stdlib.safeAdd(v265, stdlib.checkedBigNumberify('./index.rsh:44:42:decimal', stdlib.UInt_max, '1'));
  const v434 = v336;
  const v435 = v325;
  const v437 = stdlib.lt(v325, stdlib.checkedBigNumberify('./index.rsh:24:22:decimal', stdlib.UInt_max, '10'));
  if (v437) {
    return;
    }
  else {
    const v438 = stdlib.safeMul(v325, v247);
    ;
    return;
    }
  
  
  };
export async function Pharmacy_purchase(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Pharmacy_purchase expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Pharmacy_purchase expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Pharmacy_purchase4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Pharmacy_purchase(uint64)(uint64,uint64)`],
    pure: [],
    sigs: [`Pharmacy_purchase(uint64)(uint64,uint64)`]
    },
  appApproval: `ByAJAAEECggDICigjQYmAgEAACI1ADEYQQI9KWRJIls1ASEEWzUCNhoAF0lBABQiNQQjNQaB+/vUvg8SRDYaAUIAHjYaAhc1BDYaAzYaARdJIwxAAOhJIQUMQACbIQUSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lJIQZbNf8hB1s1/oE4WzX9STUFNfyABNeQtN00/FCwNPwXSTX7JTT9CQ5ENP80+wuIAcyxIrIBNPuyEiSyEDEAshQ0/rIRszT9NPsINfqACAAAAAAAAAFGNPoWNPsWUFCwNPoWNPsWUDUHNANXACA0/zT+NAOBMFsjCDT6MgZCAKwjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hB1s1/oAEmouRdLAlNP6IAWY0/zEAEkQ0/zQDIQZbNP4iIjIGQgBmSCEIiAEyIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQRbNf6ABKzRH8M0/xZQNP4WULAhCIgBAbEisgEishIkshAyCrIUNP6yEbMxADT/FlA0/hZQKEsBVwAwZ0gjNQEyBjUCQgCANf81/jX9Nfw1+zX6NP4lDEEAJDT6NPsWUDT8FlA0/RZQNP4WUChLAVcAQGdIJDUBMgY1AkIASbEisgE0/jT7C7III7IQNPqyB7OxIrIBIrISJLIQMgmyFTIKshQ0/LIRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v247",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v248",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v247",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v248",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T9",
                "name": "v300",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v326",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Pharmacy_purchase",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T8",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T9",
                "name": "v300",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620013a4380380620013a4833981016040819052620000269162000226565b60008055436003556040805133815282516020808301919091528084015180518385015201516001600160a01b0316606082015290517f7f05ef72ba4be4573fbbe84ae43ad7123b9e105ada7dc62406560e3322fcdac99181900360800190a162000094341560076200011f565b604080516060808201835260006020808401828152848601838152338087528884018051518452518401516001600160a01b039081168352600195869055439095558751938401529051958201959095529351169083015290608001604051602081830303815290604052600290805190602001906200011692919062000149565b505050620002dd565b81620001455760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015790620002a0565b90600052602060002090601f0160209004810192826200017b5760008555620001c6565b82601f106200019657805160ff1916838001178555620001c6565b82800160010185558215620001c6579182015b82811115620001c6578251825591602001919060010190620001a9565b50620001d4929150620001d8565b5090565b5b80821115620001d45760008155600101620001d9565b604080519081016001600160401b03811182821017156200022057634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200023a57600080fd5b62000244620001ef565b835181526040601f19830112156200025b57600080fd5b62000265620001ef565b6020850151815260408501519092506001600160a01b03811681146200028a57600080fd5b6020838101919091528101919091529392505050565b600181811c90821680620002b557607f821691505b60208210811415620002d757634e487b7160e01b600052602260045260246000fd5b50919050565b6110b780620002ed6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632772eddc146100835780632c10a15914610096578063321ca863146100a957806383230757146100d7578063ab53f2c6146100ec57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610cd4565b61010f565b61005d6100a4366004610cd4565b610145565b6100bc6100b7366004610cf0565b610177565b6040805182518152602092830151928101929092520161007a565b3480156100e357600080fd5b50600154610070565b3480156100f857600080fd5b5061010161019a565b60405161007a929190610d35565b604080516060810182526000602082018181529282015290815261014161013b36849003840184610dd7565b82610237565b5050565b604080516060810182526000602082018181529282015290815261014161017136849003840184610e3c565b82610495565b604080518082019091526000808252602082015261019482610649565b92915050565b6000606060005460028080546101af90610e74565b80601f01602080910402602001604051908101604052809291908181526020018280546101db90610e74565b80156102285780601f106101fd57610100808354040283529160200191610228565b820191906000526020600020905b81548152906001019060200180831161020b57829003601f168201915b50505050509050915091509091565b610247600460005414600f6106a0565b815161026290158061025b57508251600154145b60106106a0565b60008080556002805461027490610e74565b80601f01602080910402602001604051908101604052809291908181526020018280546102a090610e74565b80156102ed5780601f106102c2576101008083540402835291602001916102ed565b820191906000526020600020905b8154815290600101906020018083116102d057829003601f168201915b50505050508060200190518101906103059190610ec5565b905061030f610b44565b60408051338152855160208083019190915286015151518183015290517f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae9181900360600190a1610378610368600a84608001516106c6565b602086015151511115600d6106a0565b60208083015190850151515161039a9161039191610715565b3414600e6106a0565b6040820151602085015151516103b291903390610774565b6080820151602085015151516103c8919061078d565b808252602080830180519290925285810151515182518201529051604080518251815291830151928201929092527fde40b588e10c5283f2b01930fe2bcc5417d1839eea4e0b7919e05cab24188b35910160405180910390a160208101518352610430610b73565b825181516001600160a01b03918216905260208085015183519091015260408085015183519216910152606083015161046a90600161078d565b60208083018051929092528351825190910152514360409091015261048e816107da565b5050505050565b6104a5600160005414600b6106a0565b81516104c09015806104b957508251600154145b600c6106a0565b6000808055600280546104d290610e74565b80601f01602080910402602001604051908101604052809291908181526020018280546104fe90610e74565b801561054b5780601f106105205761010080835404028352916020019161054b565b820191906000526020600020905b81548152906001019060200180831161052e57829003601f168201915b50505050508060200190518101906105639190610f4f565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16105ba341560086106a0565b6105d46105cd338360400151600a610941565b60096106a0565b80516105ec906001600160a01b03163314600a6106a0565b6105f4610b73565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169281019290925280830180516000908190528151909201919091525143910152610643816107da565b50505050565b6040805180820190915260008082526020820152610665610bc0565b60208101515183905261068e604080516060810182526000602082018181529282015290815290565b6106988282610237565b519392505050565b816101415760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826106d38382610fd8565b91508111156101945760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016106bd565b60008115806107395750828261072b8183610fef565b9250610737908361100e565b145b6101945760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016106bd565b61077f838383610959565b61078857600080fd5b505050565b60008261079a8382611030565b91508110156101945760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016106bd565b600a81602001516020015110156108d05761082f6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015185168187019081528388018051516060808a0191825291518601516080808b01918252600460005543600155855180890199909952955188860152925190971690860152945191840191909152925160a0808401919091528351808403909101815260c09092019092528051610788926002920190610bed565b8060000151600001516001600160a01b03166108fc6108ff836020015160200151846000015160200151610715565b6040518115909202916000818181858888f19350505050158015610927573d6000803e3d6000fd5b506000808055600181905561093e90600290610c71565b50565b600061094f83853085610a2a565b90505b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916109b891611048565b60006040518083038185875af1925050503d80600081146109f5576040519150601f19603f3d011682016040523d82523d6000602084013e6109fa565b606091505b5091509150610a0b82826002610b04565b5080806020019051810190610a209190611064565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610a9191611048565b60006040518083038185875af1925050503d8060008114610ace576040519150601f19603f3d011682016040523d82523d6000602084013e610ad3565b606091505b5091509150610ae482826001610b04565b5080806020019051810190610af99190611064565b979650505050505050565b60608315610b13575081610952565b825115610b235782518084602001fd5b60405163100960cb60e01b8152600481018390526024016106bd565b905290565b604051806040016040528060008152602001610b3f604051806040016040528060008152602001600081525090565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610b3f60405180606001604052806000815260200160008152602001600081525090565b604051806040016040528060008152602001610b3f60408051808201909152600060208201908152815290565b828054610bf990610e74565b90600052602060002090601f016020900481019282610c1b5760008555610c61565b82601f10610c3457805160ff1916838001178555610c61565b82800160010185558215610c61579182015b82811115610c61578251825591602001919060010190610c46565b50610c6d929150610ca7565b5090565b508054610c7d90610e74565b6000825580601f10610c8d575050565b601f01602090049060005260206000209081019061093e91905b5b80821115610c6d5760008155600101610ca8565b600060408284031215610cce57600080fd5b50919050565b600060408284031215610ce657600080fd5b6109528383610cbc565b600060208284031215610d0257600080fd5b5035919050565b60005b83811015610d24578181015183820152602001610d0c565b838111156106435750506000910152565b8281526040602082015260008251806040840152610d5a816060850160208701610d09565b601f01601f1916919091016060019392505050565b6040805190810167ffffffffffffffff81118282101715610da057634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610da057634e487b7160e01b600052604160045260246000fd5b60008183036040811215610dea57600080fd5b610df2610d6f565b833581526020601f1983011215610e0857600080fd5b610e10610da6565b9150610e1a610da6565b602094850135815282529283015250919050565b801515811461093e57600080fd5b600060408284031215610e4e57600080fd5b610e56610d6f565b823581526020830135610e6881610e2e565b60208201529392505050565b600181811c90821680610e8857607f821691505b60208210811415610cce57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610ec057600080fd5b919050565b600060a08284031215610ed757600080fd5b60405160a0810181811067ffffffffffffffff82111715610f0857634e487b7160e01b600052604160045260246000fd5b604052610f1483610ea9565b815260208301516020820152610f2c60408401610ea9565b604082015260608301516060820152608083015160808201528091505092915050565b600060608284031215610f6157600080fd5b6040516060810181811067ffffffffffffffff82111715610f9257634e487b7160e01b600052604160045260246000fd5b604052610f9e83610ea9565b815260208301516020820152610fb660408401610ea9565b60408201529392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015610fea57610fea610fc2565b500390565b600081600019048311821515161561100957611009610fc2565b500290565b60008261102b57634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561104357611043610fc2565b500190565b6000825161105a818460208701610d09565b9190910192915050565b60006020828403121561107657600080fd5b815161095281610e2e56fea2646970667358221220dc92300c8fc3f9d023458f5411a96b8bb217f04e1830ebe9a589436d9266ae6264736f6c634300080c0033`,
  BytecodeLen: 5028,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:25:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:50:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:32:46:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Distributor": Distributor,
  "Pharmacy_purchase": Pharmacy_purchase
  };
export const _APIs = {
  Pharmacy: {
    purchase: Pharmacy_purchase
    }
  };
