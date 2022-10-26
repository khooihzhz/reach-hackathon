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
      1: [ctc0, ctc1, ctc2, ctc1],
      4: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1]
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    drugSupply: ctc0,
    drugToken: ctc1,
    price: ctc0
    });
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc5 = stdlib.T_Address;
  
  
  const v247 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:20:73:application',
    fs: ['at ./index.rsh:19:19:application call to [unknown function] (defined at: ./index.rsh:19:23:function exp)'],
    msg: 'getParams',
    who: 'Distributor'
    });
  const v248 = v247.drugSupply;
  const v249 = v247.drugToken;
  const v250 = v247.price;
  
  const txn1 = await (ctc.sendrecv({
    args: [v250, v249, v248],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v255, v256, v257], secs: v259, time: v258, didSend: v35, from: v254 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v256
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v255, v256, v257], secs: v259, time: v258, didSend: v35, from: v254 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v254, v255, v256, v257],
    evt_cnt: 0,
    funcNum: 1,
    lct: v258,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:15:dot', stdlib.UInt_max, '0'), [[v257, v256]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v266, time: v265, didSend: v42, from: v264 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v257,
        kind: 'to',
        tok: v256
        });
      const v277 = stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, '0');
      const v278 = stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, '0');
      const v279 = v265;
      
      if (await (async () => {
        const v294 = stdlib.lt(v278, v257);
        
        return v294;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v350 = stdlib.safeMul(v278, v255);
        sim_r.txns.push({
          kind: 'from',
          to: v254,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v256
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
    tys: [ctc5, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v266, time: v265, didSend: v42, from: v264 } = txn2;
  ;
  ;
  const v273 = stdlib.addressEq(v254, v264);
  stdlib.assert(v273, {
    at: './index.rsh:26:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Distributor'
    });
  let v277 = stdlib.checkedBigNumberify('./index.rsh:30:51:decimal', stdlib.UInt_max, '0');
  let v278 = stdlib.checkedBigNumberify('./index.rsh:30:48:decimal', stdlib.UInt_max, '0');
  let v279 = v265;
  
  let txn3 = txn2;
  while (await (async () => {
    const v294 = stdlib.lt(v278, v257);
    
    return v294;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v312], secs: v314, time: v313, didSend: v164, from: v311 } = txn4;
    undefined /* setApiDetails */;
    const v316 = v312[stdlib.checkedBigNumberify('./index.rsh:34:10:spread', stdlib.UInt_max, '0')];
    const v317 = stdlib.safeSub(v257, v278);
    const v318 = stdlib.le(v316, v317);
    stdlib.assert(v318, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:36:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:34:39:application call to [unknown function] (defined at: ./index.rsh:34:39:function exp)', 'at ./index.rsh:34:39:application call to [unknown function] (defined at: ./index.rsh:34:39:function exp)'],
      msg: 'too many',
      who: 'Distributor'
      });
    const v320 = stdlib.safeMul(v255, v316);
    ;
    ;
    const v337 = stdlib.safeAdd(v278, v316);
    const v338 = [v337, v316];
    await txn4.getOutput('Pharmacy_purchase', 'v338', ctc4, v338);
    const v348 = stdlib.safeAdd(v277, stdlib.checkedBigNumberify('./index.rsh:42:46:decimal', stdlib.UInt_max, '1'));
    const cv277 = v348;
    const cv278 = v337;
    const cv279 = v313;
    
    v277 = cv277;
    v278 = cv278;
    v279 = cv279;
    
    txn3 = txn4;
    continue;
    
    }
  const v350 = stdlib.safeMul(v278, v255);
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
  
  
  const [v254, v255, v256, v257, v277, v278] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1]);
  const v297 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:34:39:application call to [unknown function] (defined at: ./index.rsh:34:39:function exp)', 'at ./index.rsh:34:39:application call to [unknown function] (defined at: ./index.rsh:34:39:function exp)'],
    msg: 'in',
    who: 'Pharmacy_purchase'
    });
  const v298 = v297[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v300 = stdlib.safeSub(v257, v278);
  const v301 = stdlib.le(v298, v300);
  stdlib.assert(v301, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:34:39:application call to [unknown function] (defined at: ./index.rsh:34:39:function exp)', 'at ./index.rsh:34:39:application call to [unknown function] (defined at: ./index.rsh:34:39:function exp)'],
    msg: 'too many',
    who: 'Pharmacy_purchase'
    });
  
  const v310 = stdlib.safeMul(v255, v298);
  
  const txn1 = await (ctc.sendrecv({
    args: [v254, v255, v256, v257, v277, v278, v297],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v310, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v312], secs: v314, time: v313, didSend: v164, from: v311 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Pharmacy_purchase"
        });
      const v316 = v312[stdlib.checkedBigNumberify('./index.rsh:34:10:spread', stdlib.UInt_max, '0')];
      const v320 = stdlib.safeMul(v255, v316);
      sim_r.txns.push({
        amt: v320,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v311,
        tok: v256
        });
      const v337 = stdlib.safeAdd(v278, v316);
      const v338 = [v337, v316];
      const v339 = await txn1.getOutput('Pharmacy_purchase', 'v338', ctc4, v338);
      
      const v348 = stdlib.safeAdd(v277, stdlib.checkedBigNumberify('./index.rsh:42:46:decimal', stdlib.UInt_max, '1'));
      const v446 = v348;
      const v447 = v337;
      const v449 = stdlib.lt(v337, v257);
      if (v449) {
        sim_r.isHalt = false;
        }
      else {
        const v450 = stdlib.safeMul(v337, v255);
        sim_r.txns.push({
          kind: 'from',
          to: v254,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v256
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
    tys: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v312], secs: v314, time: v313, didSend: v164, from: v311 } = txn1;
  undefined /* setApiDetails */;
  const v316 = v312[stdlib.checkedBigNumberify('./index.rsh:34:10:spread', stdlib.UInt_max, '0')];
  const v317 = stdlib.safeSub(v257, v278);
  const v318 = stdlib.le(v316, v317);
  stdlib.assert(v318, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:34:39:application call to [unknown function] (defined at: ./index.rsh:34:39:function exp)', 'at ./index.rsh:34:39:application call to [unknown function] (defined at: ./index.rsh:34:39:function exp)'],
    msg: 'too many',
    who: 'Pharmacy_purchase'
    });
  const v320 = stdlib.safeMul(v255, v316);
  ;
  ;
  const v337 = stdlib.safeAdd(v278, v316);
  const v338 = [v337, v316];
  const v339 = await txn1.getOutput('Pharmacy_purchase', 'v338', ctc4, v338);
  if (v164) {
    stdlib.protect(ctc5, await interact.out(v312, v339), {
      at: './index.rsh:34:11:application',
      fs: ['at ./index.rsh:34:11:application call to [unknown function] (defined at: ./index.rsh:34:11:function exp)', 'at ./index.rsh:41:12:application call to "ret" (defined at: ./index.rsh:37:36:function exp)', 'at ./index.rsh:37:36:application call to [unknown function] (defined at: ./index.rsh:37:36:function exp)'],
      msg: 'out',
      who: 'Pharmacy_purchase'
      });
    }
  else {
    }
  
  const v348 = stdlib.safeAdd(v277, stdlib.checkedBigNumberify('./index.rsh:42:46:decimal', stdlib.UInt_max, '1'));
  const v446 = v348;
  const v447 = v337;
  const v449 = stdlib.lt(v337, v257);
  if (v449) {
    return;
    }
  else {
    const v450 = stdlib.safeMul(v337, v255);
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
  appApproval: `ByAJAAEECAMgKDCgjQYmAgEAACI1ADEYQQJhKWRJIls1ASVbNQI2GgAXSUEAFCI1BCM1BoH7+9S+DxJENhoBQgAeNhoCFzUENhoDNhoBF0kjDEAA+UkhBAxAAKMhBBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUohBVs1/yEGWzX+IQdbNf2BQFs1/Ek1BTX7gATXkLTdNPtQsDT7F0k1+jT9NPwJDkQ0/zT6C4gB67EisgE0+rISJLIQMQCyFDT+shGzNPw0+gg1+YAIAAAAAAAAAVI0+RY0+hZQULA0+RY0+hZQNQc0A1cAIDT/NP40/TQDgThbIwg0+TIGQgDCIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEGWzX+IQdbNf2ABJqLkXSwNP00/ogBfDT/MQASRDT/NAMhBVs0/jT9IiIyBkIAc0ghCIgBRiI0ARJENARJIhJMNAISEURJNQVJSSJbNf8lWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwIQiIAQyxIrIBIrISJLIQMgqyFDT+shGzMQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAIc1/zX+Nf01/DX7Nfo1+TT+NPwMQQAoNPk0+hZQNPsWUDT8FlA0/RZQNP4WUChLAVcASGdIJDUBMgY1AkIASbEisgE0/jT6C7III7IQNPmyB7OxIrIBIrISJLIQMgmyFTIKshQ0+7IRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
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
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v256",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v257",
                "type": "uint256"
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
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v256",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v257",
                "type": "uint256"
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
                "name": "v312",
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
    "name": "_reach_oe_v338",
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
                "name": "v312",
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
  Bytecode: `0x60806040526040516200145638038062001456833981016040819052620000269162000249565b600080554360035560408051338152825160208083019190915280840151805183850152908101516001600160a01b03166060830152820151608082015290517f57dd92bd95aea54c5537e918ca905e8ab41e33e8440512d93886574b31989f4f9181900360a00190a16200009e3415600762000142565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a8601805151865280518701516001600160a01b03908116865290518b0151835260019788905543909755895195860152925197840197909752519092169481019490945251908301529060a00160405160208183030381529060405260029080519060200190620001399291906200016c565b50505062000333565b81620001685760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017a90620002f6565b90600052602060002090601f0160209004810192826200019e5760008555620001e9565b82601f10620001b957805160ff1916838001178555620001e9565b82800160010185558215620001e9579182015b82811115620001e9578251825591602001919060010190620001cc565b50620001f7929150620001fb565b5090565b5b80821115620001f75760008155600101620001fc565b604051606081016001600160401b03811182821017156200024357634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200025d57600080fd5b604080519081016001600160401b03811182821017156200028e57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002a857600080fd5b620002b262000212565b6020850151815260408501519092506001600160a01b0381168114620002d757600080fd5b6020838101919091526060949094015160408301529283015250919050565b600181811c908216806200030b57607f821691505b602082108114156200032d57634e487b7160e01b600052602260045260246000fd5b50919050565b61111380620003436000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632772eddc146100835780632c10a15914610096578063321ca863146100a957806383230757146100d7578063ab53f2c6146100ec57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610d19565b61010f565b61005d6100a4366004610d19565b610145565b6100bc6100b7366004610d35565b610177565b6040805182518152602092830151928101929092520161007a565b3480156100e357600080fd5b50600154610070565b3480156100f857600080fd5b5061010161019a565b60405161007a929190610d7a565b604080516060810182526000602082018181529282015290815261014161013b36849003840184610e1c565b82610237565b5050565b604080516060810182526000602082018181529282015290815261014161017136849003840184610e81565b826104a4565b604080518082019091526000808252602082015261019482610667565b92915050565b6000606060005460028080546101af90610eb9565b80601f01602080910402602001604051908101604052809291908181526020018280546101db90610eb9565b80156102285780601f106101fd57610100808354040283529160200191610228565b820191906000526020600020905b81548152906001019060200180831161020b57829003601f168201915b50505050509050915091509091565b610247600460005414600f6106be565b815161026290158061025b57508251600154145b60106106be565b60008080556002805461027490610eb9565b80601f01602080910402602001604051908101604052809291908181526020018280546102a090610eb9565b80156102ed5780601f106102c2576101008083540402835291602001916102ed565b820191906000526020600020905b8154815290600101906020018083116102d057829003601f168201915b50505050508060200190518101906103059190610f0a565b905061030f610b82565b60408051338152855160208083019190915286015151518183015290517f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae9181900360600190a161037b61036b83606001518460a001516106e4565b602086015151511115600d6106be565b60208083015190850151515161039d9161039491610733565b3414600e6106be565b6040820151602085015151516103b591903390610792565b60a0820151602085015151516103cb91906107ab565b808252602080830180519290925285810151515182518201529051604080518251815291830151928201929092527f11b7de5e5b5500d80bfe232e1775bdbb0f94ac85514748ce0e2bade49f09db6b910160405180910390a160208101518352610433610bb1565b825181516001600160a01b0391821690526020808501518351909101526040808501518351921691015260608084015182519091015260808301516104799060016107ab565b60208083018051929092528351825190910152514360409091015261049d816107f8565b5050505050565b6104b4600160005414600b6106be565b81516104cf9015806104c857508251600154145b600c6106be565b6000808055600280546104e190610eb9565b80601f016020809104026020016040519081016040528092919081815260200182805461050d90610eb9565b801561055a5780601f1061052f5761010080835404028352916020019161055a565b820191906000526020600020905b81548152906001019060200180831161053d57829003601f168201915b50505050508060200190518101906105729190610f9e565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16105c9341560086106be565b6105e66105df338360400151846060015161097f565b60096106be565b80516105fe906001600160a01b03163314600a6106be565b610606610bb1565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169281019290925260608085015184519091015280830180516000908190528151909201919091525143910152610661816107f8565b50505050565b6040805180820190915260008082526020820152610683610c05565b6020810151518390526106ac604080516060810182526000602082018181529282015290815290565b6106b68282610237565b519392505050565b816101415760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826106f18382611034565b91508111156101945760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016106db565b600081158061075757508282610749818361104b565b9250610755908361106a565b145b6101945760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016106db565b61079d838383610997565b6107a657600080fd5b505050565b6000826107b8838261108c565b91508110156101945760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016106db565b8051606001516020808301510151101561090e576108576040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015185168187019081528751606090810151818901908152858a018051516080808c01918252915188015160a0808d019182526004600055436001558751808b019b909b5297518a8801529451909916928801929092525190860152945191840191909152925160c0808401919091528351808403909101815260e090920190925280516107a6926002920190610c32565b8060000151600001516001600160a01b03166108fc61093d836020015160200151846000015160200151610733565b6040518115909202916000818181858888f19350505050158015610965573d6000803e3d6000fd5b506000808055600181905561097c90600290610cb6565b50565b600061098d83853085610a68565b90505b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916109f6916110a4565b60006040518083038185875af1925050503d8060008114610a33576040519150601f19603f3d011682016040523d82523d6000602084013e610a38565b606091505b5091509150610a4982826002610b42565b5080806020019051810190610a5e91906110c0565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610acf916110a4565b60006040518083038185875af1925050503d8060008114610b0c576040519150601f19603f3d011682016040523d82523d6000602084013e610b11565b606091505b5091509150610b2282826001610b42565b5080806020019051810190610b3791906110c0565b979650505050505050565b60608315610b51575081610990565b825115610b615782518084602001fd5b60405163100960cb60e01b8152600481018390526024016106db565b905290565b604051806040016040528060008152602001610b7d604051806040016040528060008152602001600081525090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610b7d60405180606001604052806000815260200160008152602001600081525090565b604051806040016040528060008152602001610b7d60408051808201909152600060208201908152815290565b828054610c3e90610eb9565b90600052602060002090601f016020900481019282610c605760008555610ca6565b82601f10610c7957805160ff1916838001178555610ca6565b82800160010185558215610ca6579182015b82811115610ca6578251825591602001919060010190610c8b565b50610cb2929150610cec565b5090565b508054610cc290610eb9565b6000825580601f10610cd2575050565b601f01602090049060005260206000209081019061097c91905b5b80821115610cb25760008155600101610ced565b600060408284031215610d1357600080fd5b50919050565b600060408284031215610d2b57600080fd5b6109908383610d01565b600060208284031215610d4757600080fd5b5035919050565b60005b83811015610d69578181015183820152602001610d51565b838111156106615750506000910152565b8281526040602082015260008251806040840152610d9f816060850160208701610d4e565b601f01601f1916919091016060019392505050565b6040805190810167ffffffffffffffff81118282101715610de557634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610de557634e487b7160e01b600052604160045260246000fd5b60008183036040811215610e2f57600080fd5b610e37610db4565b833581526020601f1983011215610e4d57600080fd5b610e55610deb565b9150610e5f610deb565b602094850135815282529283015250919050565b801515811461097c57600080fd5b600060408284031215610e9357600080fd5b610e9b610db4565b823581526020830135610ead81610e73565b60208201529392505050565b600181811c90821680610ecd57607f821691505b60208210811415610d1357634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610f0557600080fd5b919050565b600060c08284031215610f1c57600080fd5b60405160c0810181811067ffffffffffffffff82111715610f4d57634e487b7160e01b600052604160045260246000fd5b604052610f5983610eee565b815260208301516020820152610f7160408401610eee565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600060808284031215610fb057600080fd5b6040516080810181811067ffffffffffffffff82111715610fe157634e487b7160e01b600052604160045260246000fd5b604052610fed83610eee565b81526020830151602082015261100560408401610eee565b6040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000828210156110465761104661101e565b500390565b60008160001904831182151516156110655761106561101e565b500290565b60008261108757634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561109f5761109f61101e565b500190565b600082516110b6818460208701610d4e565b9190910192915050565b6000602082840312156110d257600080fd5b815161099081610e7356fea26469706673582212202c94a5958d782b1105ef3f865256ff463f70ee3b92bcb83a228b643249b8f23b64736f6c634300080c0033`,
  BytecodeLen: 5206,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:25:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:48:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:30:46:after expr stmt semicolon',
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
