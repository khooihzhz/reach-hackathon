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
      4: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1]
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
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Data({
    Pharmacy_getSupply0_66: ctc3,
    Pharmacy_purchase0_66: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Address;
  
  
  const v387 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:26:73:application',
    fs: ['at ./index.rsh:25:19:application call to [unknown function] (defined at: ./index.rsh:25:23:function exp)'],
    msg: 'getParams',
    who: 'Distributor'
    });
  const v388 = v387.drugSupply;
  const v389 = v387.drugToken;
  const v390 = v387.price;
  
  const txn1 = await (ctc.sendrecv({
    args: [v390, v389, v388],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v395, v396, v397], secs: v399, time: v398, didSend: v35, from: v394 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v396
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
  const {data: [v395, v396, v397], secs: v399, time: v398, didSend: v35, from: v394 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v394, v395, v396, v397],
    evt_cnt: 0,
    funcNum: 1,
    lct: v398,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:15:dot', stdlib.UInt_max, '0'), [[v397, v396]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v408, time: v407, didSend: v47, from: v406 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v397,
        kind: 'to',
        tok: v396
        });
      const v419 = stdlib.checkedBigNumberify('./index.rsh:42:51:decimal', stdlib.UInt_max, '0');
      const v420 = stdlib.checkedBigNumberify('./index.rsh:42:48:decimal', stdlib.UInt_max, '0');
      const v421 = v407;
      const v428 = stdlib.checkedBigNumberify('./index.rsh:23:3:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v437 = stdlib.lt(v420, v397);
        
        return v437;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v394,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v396
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
    tys: [ctc7, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v408, time: v407, didSend: v47, from: v406 } = txn2;
  ;
  ;
  const v415 = stdlib.addressEq(v394, v406);
  stdlib.assert(v415, {
    at: './index.rsh:38:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Distributor'
    });
  let v419 = stdlib.checkedBigNumberify('./index.rsh:42:51:decimal', stdlib.UInt_max, '0');
  let v420 = stdlib.checkedBigNumberify('./index.rsh:42:48:decimal', stdlib.UInt_max, '0');
  let v421 = v407;
  let v428 = stdlib.checkedBigNumberify('./index.rsh:23:3:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v437 = stdlib.lt(v420, v397);
    
    return v437;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v472], secs: v474, time: v473, didSend: v270, from: v471 } = txn4;
    switch (v472[0]) {
      case 'Pharmacy_getSupply0_66': {
        const v475 = v472[1];
        undefined /* setApiDetails */;
        ;
        const v492 = stdlib.safeSub(v397, v420);
        await txn4.getOutput('Pharmacy_getSupply', 'v492', ctc0, v492);
        const cv419 = v419;
        const cv420 = v420;
        const cv421 = v473;
        const cv428 = v428;
        
        v419 = cv419;
        v420 = cv420;
        v421 = cv421;
        v428 = cv428;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Pharmacy_purchase0_66': {
        const v530 = v472[1];
        undefined /* setApiDetails */;
        const v537 = v530[stdlib.checkedBigNumberify('./index.rsh:46:10:spread', stdlib.UInt_max, '0')];
        const v538 = stdlib.safeSub(v397, v420);
        const v539 = stdlib.le(v537, v538);
        stdlib.assert(v539, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:48:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:46:39:application call to [unknown function] (defined at: ./index.rsh:46:39:function exp)', 'at ./index.rsh:42:46:application call to [unknown function] (defined at: ./index.rsh:46:39:function exp)', 'at ./index.rsh:42:46:application call to [unknown function] (defined at: ./index.rsh:42:46:function exp)'],
          msg: 'too many',
          who: 'Distributor'
          });
        const v541 = stdlib.safeMul(v395, v537);
        const v542 = stdlib.safeMul(v541, stdlib.checkedBigNumberify('./index.rsh:49:31:decimal', stdlib.UInt_max, '1000000'));
        const v544 = stdlib.add(v428, v542);
        ;
        ;
        const v569 = stdlib.safeAdd(v420, v537);
        const v571 = stdlib.safeSub(v397, v569);
        const v572 = [v569, v537, v571];
        await txn4.getOutput('Pharmacy_purchase', 'v572', ctc6, v572);
        const v583 = stdlib.safeAdd(v419, stdlib.checkedBigNumberify('./index.rsh:54:46:decimal', stdlib.UInt_max, '1'));
        const cv419 = v583;
        const cv420 = v569;
        const cv421 = v473;
        const cv428 = v544;
        
        v419 = cv419;
        v420 = cv420;
        v421 = cv421;
        v428 = cv428;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  
  
  };
export async function Pharmacies(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Pharmacies expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Pharmacies expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Data({
    Pharmacy_getSupply0_66: ctc3,
    Pharmacy_purchase0_66: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v395, v396, v397], secs: v399, time: v398, didSend: v35, from: v394 } = txn1;
  ;
  ;
  const v405 = {
    drugSupply: v397,
    drugToken: v396,
    price: v395
    };
  stdlib.protect(ctc2, await interact.optIn(v405), {
    at: './index.rsh:31:28:application',
    fs: ['at ./index.rsh:31:28:application call to [unknown function] (defined at: ./index.rsh:31:28:function exp)', 'at ./index.rsh:31:28:application call to "liftedInteract" (defined at: ./index.rsh:31:28:application)'],
    msg: 'optIn',
    who: 'Pharmacies'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v408, time: v407, didSend: v47, from: v406 } = txn2;
  ;
  ;
  const v415 = stdlib.addressEq(v394, v406);
  stdlib.assert(v415, {
    at: './index.rsh:38:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Pharmacies'
    });
  let v419 = stdlib.checkedBigNumberify('./index.rsh:42:51:decimal', stdlib.UInt_max, '0');
  let v420 = stdlib.checkedBigNumberify('./index.rsh:42:48:decimal', stdlib.UInt_max, '0');
  let v421 = v407;
  let v428 = stdlib.checkedBigNumberify('./index.rsh:23:3:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v437 = stdlib.lt(v420, v397);
    
    return v437;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v472], secs: v474, time: v473, didSend: v270, from: v471 } = txn4;
    switch (v472[0]) {
      case 'Pharmacy_getSupply0_66': {
        const v475 = v472[1];
        undefined /* setApiDetails */;
        ;
        const v492 = stdlib.safeSub(v397, v420);
        await txn4.getOutput('Pharmacy_getSupply', 'v492', ctc0, v492);
        const cv419 = v419;
        const cv420 = v420;
        const cv421 = v473;
        const cv428 = v428;
        
        v419 = cv419;
        v420 = cv420;
        v421 = cv421;
        v428 = cv428;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Pharmacy_purchase0_66': {
        const v530 = v472[1];
        undefined /* setApiDetails */;
        const v537 = v530[stdlib.checkedBigNumberify('./index.rsh:46:10:spread', stdlib.UInt_max, '0')];
        const v538 = stdlib.safeSub(v397, v420);
        const v539 = stdlib.le(v537, v538);
        stdlib.assert(v539, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:48:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:46:39:application call to [unknown function] (defined at: ./index.rsh:46:39:function exp)', 'at ./index.rsh:42:46:application call to [unknown function] (defined at: ./index.rsh:46:39:function exp)', 'at ./index.rsh:42:46:application call to [unknown function] (defined at: ./index.rsh:42:46:function exp)'],
          msg: 'too many',
          who: 'Pharmacies'
          });
        const v541 = stdlib.safeMul(v395, v537);
        const v542 = stdlib.safeMul(v541, stdlib.checkedBigNumberify('./index.rsh:49:31:decimal', stdlib.UInt_max, '1000000'));
        const v544 = stdlib.add(v428, v542);
        ;
        ;
        const v569 = stdlib.safeAdd(v420, v537);
        const v571 = stdlib.safeSub(v397, v569);
        const v572 = [v569, v537, v571];
        await txn4.getOutput('Pharmacy_purchase', 'v572', ctc6, v572);
        const v583 = stdlib.safeAdd(v419, stdlib.checkedBigNumberify('./index.rsh:54:46:decimal', stdlib.UInt_max, '1'));
        const cv419 = v583;
        const cv420 = v569;
        const cv421 = v473;
        const cv428 = v544;
        
        v419 = cv419;
        v420 = cv420;
        v421 = cv421;
        v428 = cv428;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  
  
  };
export async function _Pharmacy_getSupply4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Pharmacy_getSupply4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Pharmacy_getSupply4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Data({
    Pharmacy_getSupply0_66: ctc3,
    Pharmacy_purchase0_66: ctc4
    });
  const ctc6 = stdlib.T_Null;
  
  
  const [v394, v395, v396, v397, v419, v420, v428] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1]);
  const v455 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:57:34:application call to [unknown function] (defined at: ./index.rsh:57:34:function exp)', 'at ./index.rsh:42:46:application call to "runPharmacy_getSupply0_66" (defined at: ./index.rsh:57:10:function exp)', 'at ./index.rsh:42:46:application call to [unknown function] (defined at: ./index.rsh:42:46:function exp)'],
    msg: 'in',
    who: 'Pharmacy_getSupply'
    });
  const v460 = ['Pharmacy_getSupply0_66', v455];
  
  const txn1 = await (ctc.sendrecv({
    args: [v394, v395, v396, v397, v419, v420, v428, v460],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v472], secs: v474, time: v473, didSend: v270, from: v471 } = txn1;
      
      switch (v472[0]) {
        case 'Pharmacy_getSupply0_66': {
          const v475 = v472[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Pharmacy_getSupply"
            });
          ;
          const v492 = stdlib.safeSub(v397, v420);
          const v493 = await txn1.getOutput('Pharmacy_getSupply', 'v492', ctc1, v492);
          
          const v875 = v419;
          const v876 = v420;
          const v878 = v428;
          const v879 = stdlib.lt(v420, v397);
          if (v879) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v394,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v396
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Pharmacy_purchase0_66': {
          const v530 = v472[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v472], secs: v474, time: v473, didSend: v270, from: v471 } = txn1;
  switch (v472[0]) {
    case 'Pharmacy_getSupply0_66': {
      const v475 = v472[1];
      undefined /* setApiDetails */;
      ;
      const v492 = stdlib.safeSub(v397, v420);
      const v493 = await txn1.getOutput('Pharmacy_getSupply', 'v492', ctc1, v492);
      if (v270) {
        stdlib.protect(ctc6, await interact.out(v475, v493), {
          at: './index.rsh:57:11:application',
          fs: ['at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:11:function exp)', 'at ./index.rsh:60:12:application call to "ret" (defined at: ./index.rsh:59:23:function exp)', 'at ./index.rsh:59:23:application call to [unknown function] (defined at: ./index.rsh:59:23:function exp)'],
          msg: 'out',
          who: 'Pharmacy_getSupply'
          });
        }
      else {
        }
      
      const v875 = v419;
      const v876 = v420;
      const v878 = v428;
      const v879 = stdlib.lt(v420, v397);
      if (v879) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'Pharmacy_purchase0_66': {
      const v530 = v472[1];
      return;
      break;
      }
    }
  
  
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
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Pharmacy_getSupply0_66: ctc4,
    Pharmacy_purchase0_66: ctc3
    });
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v394, v395, v396, v397, v419, v420, v428] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1]);
  const v440 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:46:39:application call to [unknown function] (defined at: ./index.rsh:46:39:function exp)', 'at ./index.rsh:42:46:application call to "runPharmacy_purchase0_66" (defined at: ./index.rsh:46:10:function exp)', 'at ./index.rsh:42:46:application call to [unknown function] (defined at: ./index.rsh:42:46:function exp)'],
    msg: 'in',
    who: 'Pharmacy_purchase'
    });
  const v441 = v440[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v443 = stdlib.safeSub(v397, v420);
  const v444 = stdlib.le(v441, v443);
  stdlib.assert(v444, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:48:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:46:39:application call to [unknown function] (defined at: ./index.rsh:46:39:function exp)', 'at ./index.rsh:42:46:application call to "runPharmacy_purchase0_66" (defined at: ./index.rsh:46:10:function exp)', 'at ./index.rsh:42:46:application call to [unknown function] (defined at: ./index.rsh:42:46:function exp)'],
    msg: 'too many',
    who: 'Pharmacy_purchase'
    });
  const v451 = ['Pharmacy_purchase0_66', v440];
  
  const v469 = stdlib.safeMul(v395, v441);
  const v470 = stdlib.safeMul(v469, stdlib.checkedBigNumberify('./index.rsh:49:31:decimal', stdlib.UInt_max, '1000000'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v394, v395, v396, v397, v419, v420, v428, v451],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v470, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v472], secs: v474, time: v473, didSend: v270, from: v471 } = txn1;
      
      switch (v472[0]) {
        case 'Pharmacy_getSupply0_66': {
          const v475 = v472[1];
          
          break;
          }
        case 'Pharmacy_purchase0_66': {
          const v530 = v472[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Pharmacy_purchase"
            });
          const v537 = v530[stdlib.checkedBigNumberify('./index.rsh:46:10:spread', stdlib.UInt_max, '0')];
          const v541 = stdlib.safeMul(v395, v537);
          const v542 = stdlib.safeMul(v541, stdlib.checkedBigNumberify('./index.rsh:49:31:decimal', stdlib.UInt_max, '1000000'));
          const v544 = stdlib.add(v428, v542);
          sim_r.txns.push({
            amt: v542,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v471,
            tok: v396
            });
          const v569 = stdlib.safeAdd(v420, v537);
          const v571 = stdlib.safeSub(v397, v569);
          const v572 = [v569, v537, v571];
          const v573 = await txn1.getOutput('Pharmacy_purchase', 'v572', ctc6, v572);
          
          const v583 = stdlib.safeAdd(v419, stdlib.checkedBigNumberify('./index.rsh:54:46:decimal', stdlib.UInt_max, '1'));
          const v890 = v583;
          const v891 = v569;
          const v893 = v544;
          const v894 = stdlib.lt(v569, v397);
          if (v894) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v394,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v396
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v472], secs: v474, time: v473, didSend: v270, from: v471 } = txn1;
  switch (v472[0]) {
    case 'Pharmacy_getSupply0_66': {
      const v475 = v472[1];
      return;
      break;
      }
    case 'Pharmacy_purchase0_66': {
      const v530 = v472[1];
      undefined /* setApiDetails */;
      const v537 = v530[stdlib.checkedBigNumberify('./index.rsh:46:10:spread', stdlib.UInt_max, '0')];
      const v538 = stdlib.safeSub(v397, v420);
      const v539 = stdlib.le(v537, v538);
      stdlib.assert(v539, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:48:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:46:39:application call to [unknown function] (defined at: ./index.rsh:46:39:function exp)', 'at ./index.rsh:42:46:application call to [unknown function] (defined at: ./index.rsh:46:39:function exp)', 'at ./index.rsh:42:46:application call to [unknown function] (defined at: ./index.rsh:42:46:function exp)'],
        msg: 'too many',
        who: 'Pharmacy_purchase'
        });
      const v541 = stdlib.safeMul(v395, v537);
      const v542 = stdlib.safeMul(v541, stdlib.checkedBigNumberify('./index.rsh:49:31:decimal', stdlib.UInt_max, '1000000'));
      const v544 = stdlib.add(v428, v542);
      ;
      ;
      const v569 = stdlib.safeAdd(v420, v537);
      const v571 = stdlib.safeSub(v397, v569);
      const v572 = [v569, v537, v571];
      const v573 = await txn1.getOutput('Pharmacy_purchase', 'v572', ctc6, v572);
      if (v270) {
        stdlib.protect(ctc7, await interact.out(v530, v573), {
          at: './index.rsh:46:11:application',
          fs: ['at ./index.rsh:46:11:application call to [unknown function] (defined at: ./index.rsh:46:11:function exp)', 'at ./index.rsh:53:12:application call to "ret" (defined at: ./index.rsh:49:46:function exp)', 'at ./index.rsh:49:46:application call to [unknown function] (defined at: ./index.rsh:49:46:function exp)'],
          msg: 'out',
          who: 'Pharmacy_purchase'
          });
        }
      else {
        }
      
      const v583 = stdlib.safeAdd(v419, stdlib.checkedBigNumberify('./index.rsh:54:46:decimal', stdlib.UInt_max, '1'));
      const v890 = v583;
      const v891 = v569;
      const v893 = v544;
      const v894 = stdlib.lt(v569, v397);
      if (v894) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Pharmacy_getSupply(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Pharmacy_getSupply expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Pharmacy_getSupply expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Pharmacy_getSupply4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
    impure: [`Pharmacy_getSupply()uint64`, `Pharmacy_purchase(uint64)(uint64,uint64,uint64)`],
    pure: [],
    sigs: [`Pharmacy_getSupply()uint64`, `Pharmacy_purchase(uint64)(uint64,uint64,uint64)`]
    },
  appApproval: `ByAKAAEECOLU1ewOAyAoMKCNBiYCAQAAIjUAMRhBAucpZEkiWzUBJVs1AjYaABdJQQA0IjUEIzUGSSEEDEAAEiEEEkQ2GgE1/4ABATT/UEIAM4GP9cTZAhJEKTX/KDT/UCWvUEIAHjYaAhc1BDYaAzYaARdJIwxAAVxJIQUMQAEFIQUSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yEGWzX+IQdbNf0hCFs1/IE4WzX7gUBbNfqBSFs1+Uk1BTX4gASR8aeaNPhQsDT4IlVAAC2ACAAAAAAAAAHsNPw0+gkWULA0/DT6CRY1BzT/NP40/TT8NPs0+jIGNPlCAUU0+FcBCDX3NPcXSTX2NPw0+gkORDT+NPYLgcCEPQs19TT1iAH8sSKyATT2shIkshAxALIUNP2yEbM0+jT2CDX0gAgAAAAAAAACPDT0FjT2FlA0/DT0CRZQULA09BY09hZQNPw09AkWUDUHNP80/jT9NPw0+yMINPQyBjT5NPUIQgDDIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEHWzX+IQhbNf2ABJqLkXSwNP00/ogBgDT/MQASRDT/NAMhBls0/jT9IiIyBiJCAHNIIQmIAUkiNAESRDQESSISTDQCEhFESTUFSUkiWzX/JVs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEJiAEPsSKyASKyEiSyEDIKshQ0/rIRszEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgCKNf81/jX9Nfw1+zX6Nfk1+DT9NPsMQQAsNPg0+RZQNPoWUDT7FlA0/BZQNP0WUDT/FlAoSwFXAFBnSCQ1ATIGNQJCAEaxIrIBNP+yCCOyEDT4sgezsSKyASKyEiSyEDIJshUyCrIUNPqyEbNCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
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
                "name": "v395",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v396",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v397",
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
                "name": "v395",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v396",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v397",
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
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Pharmacy_getSupply0_66",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_Pharmacy_purchase0_66",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T10",
                "name": "v472",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v492",
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v572",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Pharmacy_getSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T11",
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
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Pharmacy_getSupply0_66",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_Pharmacy_purchase0_66",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T10",
                "name": "v472",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
  Bytecode: `0x6080604052604051620017ce380380620017ce833981016040819052620000269162000249565b600080554360035560408051338152825160208083019190915280840151805183850152908101516001600160a01b03166060830152820151608082015290517f57dd92bd95aea54c5537e918ca905e8ab41e33e8440512d93886574b31989f4f9181900360a00190a16200009e3415600762000142565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a8601805151865280518701516001600160a01b03908116865290518b0151835260019788905543909755895195860152925197840197909752519092169481019490945251908301529060a00160405160208183030381529060405260029080519060200190620001399291906200016c565b50505062000333565b81620001685760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017a90620002f6565b90600052602060002090601f0160209004810192826200019e5760008555620001e9565b82601f10620001b957805160ff1916838001178555620001e9565b82800160010185558215620001e9579182015b82811115620001e9578251825591602001919060010190620001cc565b50620001f7929150620001fb565b5090565b5b80821115620001f75760008155600101620001fc565b604051606081016001600160401b03811182821017156200024357634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200025d57600080fd5b604080519081016001600160401b03811182821017156200028e57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002a857600080fd5b620002b262000212565b6020850151815260408501519092506001600160a01b0381168114620002d757600080fd5b6020838101919091526060949094015160408301529283015250919050565b600181811c908216806200030b57607f821691505b602082108114156200032d57634e487b7160e01b600052602260045260246000fd5b50919050565b61148b80620003436000396000f3fe60806040526004361061006e5760003560e01c80634b91f3901161004b5780634b91f390146100e357806383230757146100eb578063ab53f2c614610100578063c462630d1461012357005b80631e93b0f1146100775780632c10a1591461009b578063321ca863146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610f4e565b610136565b6100c16100bc366004610f66565b61015a565b6040805182518152602080840151908201529181015190820152606001610092565b61008861018d565b3480156100f757600080fd5b50600154610088565b34801561010c57600080fd5b5061011561019c565b604051610092929190610fab565b610075610131366004610fe5565b610239565b61013e610d57565b6101566101503684900384018461109e565b82610259565b5050565b61017e60405180606001604052806000815260200160008152602001600081525090565b61018782610424565b92915050565b6000610197610481565b905090565b6000606060005460028080546101b190611102565b80601f01602080910402602001604051908101604052809291908181526020018280546101dd90611102565b801561022a5780601f106101ff5761010080835404028352916020019161022a565b820191906000526020600020905b81548152906001019060200180831161020d57829003601f168201915b50505050509050915091509091565b610241610d57565b61015661025336849003840184611137565b826104ae565b610269600160005414600b61087c565b815161028490158061027d57508251600154145b600c61087c565b60008080556002805461029690611102565b80601f01602080910402602001604051908101604052809291908181526020018280546102c290611102565b801561030f5780601f106102e45761010080835404028352916020019161030f565b820191906000526020600020905b8154815290600101906020018083116102f257829003601f168201915b505050505080602001905181019061032791906111fb565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161037e3415600861087c565b61039b61039433836040015184606001516108a2565b600961087c565b80516103b3906001600160a01b03163314600a61087c565b6103bb610d92565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169281019290925260608085015184518201528184018051600090819052815190930183905280514394019390935291519091015261041e816108ba565b50505050565b61044860405180606001604052806000815260200160008152602001600081525090565b610450610ded565b602081018051516001905251516040015183905261046c610d57565b61047682826104ae565b602001519392505050565b600061048b610ded565b6020810151516000905261049d610d57565b6104a782826104ae565b5192915050565b6104be600460005414601061087c565b81516104d99015806104d257508251600154145b601161087c565b6000808055600280546104eb90611102565b80601f016020809104026020016040519081016040528092919081815260200182805461051790611102565b80156105645780601f1061053957610100808354040283529160200191610564565b820191906000526020600020905b81548152906001019060200180831161054757829003601f168201915b505050505080602001905181019061057c9190611291565b9050610586610e32565b7ff6577fdde4998b863f59dae23a9427c0d3f8366471223c8043b0398188b7bbbf33856040516105b792919061132f565b60405180910390a160006020850151515160018111156105d9576105d961127b565b14156106c2576105eb3415600d61087c565b7f7d92d4585df5a3579dc674e3e97d8cc4a2b43a379300198a6fbfbb7f0bffd3af61061e83606001518460a00151610a62565b60405190815260200160405180910390a161064182606001518360a00151610a62565b835261064b610d92565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092526060808601518451820152608086015182850180519190915260a087015181519093019290925281514393019290925260c08501519051909101526106bc816108ba565b5061041e565b60016020850151515160018111156106dc576106dc61127b565b141561041e57602084015151604001518152606082015160a08301516107119161070591610a62565b8251511115600e61087c565b602082015181515161072f9161072691610ab1565b620f4240610ab1565b60208201819052610743903414600f61087c565b604082015181515161075791903390610b10565b60a08201518151516107699190610b24565b6040820181815260608084018051939093528351519251602001929092529083015190516107979190610a62565b606082810180516040908101939093525182518151815260208281015190820152908301518184015291517fa06b43097e7108ce5245fbfe85f0b54d96ef4e1c08fe3f0e209cc4c68512bdf39281900390910190a1606081015160208401526107fe610d92565b825181516001600160a01b039182169052602080850151835190910152604080850151835192169101526060808401518251909101526080830151610844906001610b24565b6020828101805192909252604084810151835183015282514391015260c085015190840151915191016060909101526106bc816108ba565b816101565760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006108b083853085610b71565b90505b9392505050565b80516060015160208083015101511015610a06576109206040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051516080860152805183015160a086015251015160c084015260046000554360015590516109dd9183910181516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b60405160208183030381529060405260029080519060200190610a01929190610e7f565b505050565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610a48573d6000803e3d6000fd5b5060008080556001819055610a5f90600290610f03565b50565b600082610a6f83826113ac565b91508111156101875760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610899565b6000811580610ad557508282610ac781836113c3565b9250610ad390836113e2565b145b6101875760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610899565b610b1b838383610c4b565b610a0157600080fd5b600082610b318382611404565b91508110156101875760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610899565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610bd89161141c565b60006040518083038185875af1925050503d8060008114610c15576040519150601f19603f3d011682016040523d82523d6000602084013e610c1a565b606091505b5091509150610c2b82826001610d1c565b5080806020019051810190610c409190611438565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610caa9161141c565b60006040518083038185875af1925050503d8060008114610ce7576040519150601f19603f3d011682016040523d82523d6000602084013e610cec565b606091505b5091509150610cfd82826002610d1c565b5080806020019051810190610d129190611438565b9695505050505050565b60608315610d2b5750816108b3565b825115610d3b5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610899565b604051806040016040528060008152602001610d8d60405180606001604052806000815260200160008152602001600081525090565b905290565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610d8d6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001610d8d60408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b6040805160a08101909152600060808201908152819081526020016000815260200160008152602001610d8d60405180606001604052806000815260200160008152602001600081525090565b828054610e8b90611102565b90600052602060002090601f016020900481019282610ead5760008555610ef3565b82601f10610ec657805160ff1916838001178555610ef3565b82800160010185558215610ef3579182015b82811115610ef3578251825591602001919060010190610ed8565b50610eff929150610f39565b5090565b508054610f0f90611102565b6000825580601f10610f1f575050565b601f016020900490600052602060002090810190610a5f91905b5b80821115610eff5760008155600101610f3a565b600060408284031215610f6057600080fd5b50919050565b600060208284031215610f7857600080fd5b5035919050565b60005b83811015610f9a578181015183820152602001610f82565b8381111561041e5750506000910152565b8281526040602082015260008251806040840152610fd0816060850160208701610f7f565b601f01601f1916919091016060019392505050565b600060808284031215610f6057600080fd5b6040805190810167ffffffffffffffff8111828210171561102857634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561102857634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561102857634e487b7160e01b600052604160045260246000fd5b8015158114610a5f57600080fd5b6000604082840312156110b057600080fd5b6040516040810181811067ffffffffffffffff821117156110e157634e487b7160e01b600052604160045260246000fd5b6040528235815260208301356110f681611090565b60208201529392505050565b600181811c9082168061111657607f821691505b60208210811415610f6057634e487b7160e01b600052602260045260246000fd5b6000818303608081121561114a57600080fd5b611152610ff7565b833581526060601f198301121561116857600080fd5b61117061102e565b61117861105f565b60208601356002811061118a57600080fd5b8152604086013561119a81611090565b806020830152506020605f19850112156111b357600080fd5b6111bb61102e565b60609690960135865260408101959095529384526020810193909352509092915050565b80516001600160a01b03811681146111f657600080fd5b919050565b60006080828403121561120d57600080fd5b6040516080810181811067ffffffffffffffff8211171561123e57634e487b7160e01b600052604160045260246000fd5b60405261124a836111df565b815260208301516020820152611262604084016111df565b6040820152606083015160608201528091505092915050565b634e487b7160e01b600052602160045260246000fd5b600060e082840312156112a357600080fd5b60405160e0810181811067ffffffffffffffff821117156112d457634e487b7160e01b600052604160045260246000fd5b6040526112e0836111df565b8152602083015160208201526112f8604084016111df565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a0830191906002811061137057634e487b7160e01b600052602160045260246000fd5b806040850152506020810151151560608401526040810151516080840152509392505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156113be576113be611396565b500390565b60008160001904831182151516156113dd576113dd611396565b500290565b6000826113ff57634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561141757611417611396565b500190565b6000825161142e818460208701610f7f565b9190910192915050565b60006020828403121561144a57600080fd5b81516108b38161109056fea2646970667358221220ec17b6d63ace7821fdb15cbb28ff194d64b853776be7aaff670d8aa075934ef264736f6c634300080c0033`,
  BytecodeLen: 6094,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:33:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:67:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:42:46:after expr stmt semicolon',
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
  "Pharmacies": Pharmacies,
  "Pharmacy_getSupply": Pharmacy_getSupply,
  "Pharmacy_purchase": Pharmacy_purchase
  };
export const _APIs = {
  Pharmacy: {
    getSupply: Pharmacy_getSupply,
    purchase: Pharmacy_purchase
    }
  };
