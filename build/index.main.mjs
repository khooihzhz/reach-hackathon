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
    Pharmacy_getSupply0_65: ctc3,
    Pharmacy_purchase0_65: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Address;
  
  
  const v384 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:26:73:application',
    fs: ['at ./index.rsh:25:19:application call to [unknown function] (defined at: ./index.rsh:25:23:function exp)'],
    msg: 'getParams',
    who: 'Distributor'
    });
  const v385 = v384.drugSupply;
  const v386 = v384.drugToken;
  const v387 = v384.price;
  
  const txn1 = await (ctc.sendrecv({
    args: [v387, v386, v385],
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
      
      
      const {data: [v392, v393, v394], secs: v396, time: v395, didSend: v35, from: v391 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v393
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
  const {data: [v392, v393, v394], secs: v396, time: v395, didSend: v35, from: v391 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v391, v392, v393, v394],
    evt_cnt: 0,
    funcNum: 1,
    lct: v395,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:15:dot', stdlib.UInt_max, '0'), [[v394, v393]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v405, time: v404, didSend: v47, from: v403 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: v394,
        kind: 'to',
        tok: v393
        });
      const v416 = stdlib.checkedBigNumberify('./index.rsh:39:51:decimal', stdlib.UInt_max, '0');
      const v417 = stdlib.checkedBigNumberify('./index.rsh:39:48:decimal', stdlib.UInt_max, '0');
      const v418 = v404;
      const v425 = stdlib.checkedBigNumberify('./index.rsh:23:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v433 = stdlib.lt(v417, v394);
        
        return v433;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v391,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v393
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
  const {data: [], secs: v405, time: v404, didSend: v47, from: v403 } = txn2;
  ;
  ;
  const v412 = stdlib.addressEq(v391, v403);
  stdlib.assert(v412, {
    at: './index.rsh:35:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Distributor'
    });
  let v416 = stdlib.checkedBigNumberify('./index.rsh:39:51:decimal', stdlib.UInt_max, '0');
  let v417 = stdlib.checkedBigNumberify('./index.rsh:39:48:decimal', stdlib.UInt_max, '0');
  let v418 = v404;
  let v425 = stdlib.checkedBigNumberify('./index.rsh:23:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v433 = stdlib.lt(v417, v394);
    
    return v433;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v467], secs: v469, time: v468, didSend: v267, from: v466 } = txn4;
    switch (v467[0]) {
      case 'Pharmacy_getSupply0_65': {
        const v470 = v467[1];
        undefined /* setApiDetails */;
        ;
        const v486 = stdlib.safeSub(v394, v417);
        await txn4.getOutput('Pharmacy_getSupply', 'v486', ctc0, v486);
        const cv416 = v416;
        const cv417 = v417;
        const cv418 = v468;
        const cv425 = v425;
        
        v416 = cv416;
        v417 = cv417;
        v418 = cv418;
        v425 = cv425;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Pharmacy_purchase0_65': {
        const v524 = v467[1];
        undefined /* setApiDetails */;
        const v531 = v524[stdlib.checkedBigNumberify('./index.rsh:43:10:spread', stdlib.UInt_max, '0')];
        const v532 = stdlib.safeSub(v394, v417);
        const v533 = stdlib.le(v531, v532);
        stdlib.assert(v533, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:44:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:43:39:application call to [unknown function] (defined at: ./index.rsh:43:39:function exp)', 'at ./index.rsh:39:46:application call to [unknown function] (defined at: ./index.rsh:43:39:function exp)', 'at ./index.rsh:39:46:application call to [unknown function] (defined at: ./index.rsh:39:46:function exp)'],
          msg: 'too many',
          who: 'Distributor'
          });
        const v535 = stdlib.safeMul(v392, v531);
        const v537 = stdlib.add(v425, v535);
        ;
        ;
        const v562 = stdlib.safeAdd(v417, v531);
        const v564 = stdlib.safeSub(v394, v562);
        const v565 = [v562, v531, v564];
        await txn4.getOutput('Pharmacy_purchase', 'v565', ctc6, v565);
        const v576 = stdlib.safeAdd(v416, stdlib.checkedBigNumberify('./index.rsh:49:46:decimal', stdlib.UInt_max, '1'));
        const cv416 = v576;
        const cv417 = v562;
        const cv418 = v468;
        const cv425 = v537;
        
        v416 = cv416;
        v417 = cv417;
        v418 = cv418;
        v425 = cv425;
        
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
    Pharmacy_getSupply0_65: ctc3,
    Pharmacy_purchase0_65: ctc4
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
  const {data: [v392, v393, v394], secs: v396, time: v395, didSend: v35, from: v391 } = txn1;
  ;
  ;
  const v402 = {
    drugSupply: v394,
    drugToken: v393,
    price: v392
    };
  stdlib.protect(ctc2, await interact.optIn(v402), {
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
  const {data: [], secs: v405, time: v404, didSend: v47, from: v403 } = txn2;
  ;
  ;
  const v412 = stdlib.addressEq(v391, v403);
  stdlib.assert(v412, {
    at: './index.rsh:35:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Pharmacies'
    });
  let v416 = stdlib.checkedBigNumberify('./index.rsh:39:51:decimal', stdlib.UInt_max, '0');
  let v417 = stdlib.checkedBigNumberify('./index.rsh:39:48:decimal', stdlib.UInt_max, '0');
  let v418 = v404;
  let v425 = stdlib.checkedBigNumberify('./index.rsh:23:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v433 = stdlib.lt(v417, v394);
    
    return v433;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v467], secs: v469, time: v468, didSend: v267, from: v466 } = txn4;
    switch (v467[0]) {
      case 'Pharmacy_getSupply0_65': {
        const v470 = v467[1];
        undefined /* setApiDetails */;
        ;
        const v486 = stdlib.safeSub(v394, v417);
        await txn4.getOutput('Pharmacy_getSupply', 'v486', ctc0, v486);
        const cv416 = v416;
        const cv417 = v417;
        const cv418 = v468;
        const cv425 = v425;
        
        v416 = cv416;
        v417 = cv417;
        v418 = cv418;
        v425 = cv425;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Pharmacy_purchase0_65': {
        const v524 = v467[1];
        undefined /* setApiDetails */;
        const v531 = v524[stdlib.checkedBigNumberify('./index.rsh:43:10:spread', stdlib.UInt_max, '0')];
        const v532 = stdlib.safeSub(v394, v417);
        const v533 = stdlib.le(v531, v532);
        stdlib.assert(v533, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:44:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:43:39:application call to [unknown function] (defined at: ./index.rsh:43:39:function exp)', 'at ./index.rsh:39:46:application call to [unknown function] (defined at: ./index.rsh:43:39:function exp)', 'at ./index.rsh:39:46:application call to [unknown function] (defined at: ./index.rsh:39:46:function exp)'],
          msg: 'too many',
          who: 'Pharmacies'
          });
        const v535 = stdlib.safeMul(v392, v531);
        const v537 = stdlib.add(v425, v535);
        ;
        ;
        const v562 = stdlib.safeAdd(v417, v531);
        const v564 = stdlib.safeSub(v394, v562);
        const v565 = [v562, v531, v564];
        await txn4.getOutput('Pharmacy_purchase', 'v565', ctc6, v565);
        const v576 = stdlib.safeAdd(v416, stdlib.checkedBigNumberify('./index.rsh:49:46:decimal', stdlib.UInt_max, '1'));
        const cv416 = v576;
        const cv417 = v562;
        const cv418 = v468;
        const cv425 = v537;
        
        v416 = cv416;
        v417 = cv417;
        v418 = cv418;
        v425 = cv425;
        
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
    Pharmacy_getSupply0_65: ctc3,
    Pharmacy_purchase0_65: ctc4
    });
  const ctc6 = stdlib.T_Null;
  
  
  const [v391, v392, v393, v394, v416, v417, v425] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1]);
  const v451 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:52:34:application call to [unknown function] (defined at: ./index.rsh:52:34:function exp)', 'at ./index.rsh:39:46:application call to "runPharmacy_getSupply0_65" (defined at: ./index.rsh:52:10:function exp)', 'at ./index.rsh:39:46:application call to [unknown function] (defined at: ./index.rsh:39:46:function exp)'],
    msg: 'in',
    who: 'Pharmacy_getSupply'
    });
  const v456 = ['Pharmacy_getSupply0_65', v451];
  
  const txn1 = await (ctc.sendrecv({
    args: [v391, v392, v393, v394, v416, v417, v425, v456],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v467], secs: v469, time: v468, didSend: v267, from: v466 } = txn1;
      
      switch (v467[0]) {
        case 'Pharmacy_getSupply0_65': {
          const v470 = v467[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Pharmacy_getSupply"
            });
          ;
          const v486 = stdlib.safeSub(v394, v417);
          const v487 = await txn1.getOutput('Pharmacy_getSupply', 'v486', ctc1, v486);
          
          const v860 = v416;
          const v861 = v417;
          const v863 = v425;
          const v864 = stdlib.lt(v417, v394);
          if (v864) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v391,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v393
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Pharmacy_purchase0_65': {
          const v524 = v467[1];
          
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
  const {data: [v467], secs: v469, time: v468, didSend: v267, from: v466 } = txn1;
  switch (v467[0]) {
    case 'Pharmacy_getSupply0_65': {
      const v470 = v467[1];
      undefined /* setApiDetails */;
      ;
      const v486 = stdlib.safeSub(v394, v417);
      const v487 = await txn1.getOutput('Pharmacy_getSupply', 'v486', ctc1, v486);
      if (v267) {
        stdlib.protect(ctc6, await interact.out(v470, v487), {
          at: './index.rsh:52:11:application',
          fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:11:function exp)', 'at ./index.rsh:55:12:application call to "ret" (defined at: ./index.rsh:54:23:function exp)', 'at ./index.rsh:54:23:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)'],
          msg: 'out',
          who: 'Pharmacy_getSupply'
          });
        }
      else {
        }
      
      const v860 = v416;
      const v861 = v417;
      const v863 = v425;
      const v864 = stdlib.lt(v417, v394);
      if (v864) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'Pharmacy_purchase0_65': {
      const v524 = v467[1];
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
    Pharmacy_getSupply0_65: ctc4,
    Pharmacy_purchase0_65: ctc3
    });
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v391, v392, v393, v394, v416, v417, v425] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1]);
  const v436 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:43:39:application call to [unknown function] (defined at: ./index.rsh:43:39:function exp)', 'at ./index.rsh:39:46:application call to "runPharmacy_purchase0_65" (defined at: ./index.rsh:43:10:function exp)', 'at ./index.rsh:39:46:application call to [unknown function] (defined at: ./index.rsh:39:46:function exp)'],
    msg: 'in',
    who: 'Pharmacy_purchase'
    });
  const v437 = v436[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v439 = stdlib.safeSub(v394, v417);
  const v440 = stdlib.le(v437, v439);
  stdlib.assert(v440, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:44:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:43:39:application call to [unknown function] (defined at: ./index.rsh:43:39:function exp)', 'at ./index.rsh:39:46:application call to "runPharmacy_purchase0_65" (defined at: ./index.rsh:43:10:function exp)', 'at ./index.rsh:39:46:application call to [unknown function] (defined at: ./index.rsh:39:46:function exp)'],
    msg: 'too many',
    who: 'Pharmacy_purchase'
    });
  const v447 = ['Pharmacy_purchase0_65', v436];
  
  const v465 = stdlib.safeMul(v392, v437);
  
  const txn1 = await (ctc.sendrecv({
    args: [v391, v392, v393, v394, v416, v417, v425, v447],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v465, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v467], secs: v469, time: v468, didSend: v267, from: v466 } = txn1;
      
      switch (v467[0]) {
        case 'Pharmacy_getSupply0_65': {
          const v470 = v467[1];
          
          break;
          }
        case 'Pharmacy_purchase0_65': {
          const v524 = v467[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Pharmacy_purchase"
            });
          const v531 = v524[stdlib.checkedBigNumberify('./index.rsh:43:10:spread', stdlib.UInt_max, '0')];
          const v535 = stdlib.safeMul(v392, v531);
          const v537 = stdlib.add(v425, v535);
          sim_r.txns.push({
            amt: v535,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v466,
            tok: v393
            });
          const v562 = stdlib.safeAdd(v417, v531);
          const v564 = stdlib.safeSub(v394, v562);
          const v565 = [v562, v531, v564];
          const v566 = await txn1.getOutput('Pharmacy_purchase', 'v565', ctc6, v565);
          
          const v576 = stdlib.safeAdd(v416, stdlib.checkedBigNumberify('./index.rsh:49:46:decimal', stdlib.UInt_max, '1'));
          const v875 = v576;
          const v876 = v562;
          const v878 = v537;
          const v879 = stdlib.lt(v562, v394);
          if (v879) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v391,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v393
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
  const {data: [v467], secs: v469, time: v468, didSend: v267, from: v466 } = txn1;
  switch (v467[0]) {
    case 'Pharmacy_getSupply0_65': {
      const v470 = v467[1];
      return;
      break;
      }
    case 'Pharmacy_purchase0_65': {
      const v524 = v467[1];
      undefined /* setApiDetails */;
      const v531 = v524[stdlib.checkedBigNumberify('./index.rsh:43:10:spread', stdlib.UInt_max, '0')];
      const v532 = stdlib.safeSub(v394, v417);
      const v533 = stdlib.le(v531, v532);
      stdlib.assert(v533, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:44:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:43:39:application call to [unknown function] (defined at: ./index.rsh:43:39:function exp)', 'at ./index.rsh:39:46:application call to [unknown function] (defined at: ./index.rsh:43:39:function exp)', 'at ./index.rsh:39:46:application call to [unknown function] (defined at: ./index.rsh:39:46:function exp)'],
        msg: 'too many',
        who: 'Pharmacy_purchase'
        });
      const v535 = stdlib.safeMul(v392, v531);
      const v537 = stdlib.add(v425, v535);
      ;
      ;
      const v562 = stdlib.safeAdd(v417, v531);
      const v564 = stdlib.safeSub(v394, v562);
      const v565 = [v562, v531, v564];
      const v566 = await txn1.getOutput('Pharmacy_purchase', 'v565', ctc6, v565);
      if (v267) {
        stdlib.protect(ctc7, await interact.out(v524, v566), {
          at: './index.rsh:43:11:application',
          fs: ['at ./index.rsh:43:11:application call to [unknown function] (defined at: ./index.rsh:43:11:function exp)', 'at ./index.rsh:48:12:application call to "ret" (defined at: ./index.rsh:45:36:function exp)', 'at ./index.rsh:45:36:application call to [unknown function] (defined at: ./index.rsh:45:36:function exp)'],
          msg: 'out',
          who: 'Pharmacy_purchase'
          });
        }
      else {
        }
      
      const v576 = stdlib.safeAdd(v416, stdlib.checkedBigNumberify('./index.rsh:49:46:decimal', stdlib.UInt_max, '1'));
      const v875 = v576;
      const v876 = v562;
      const v878 = v537;
      const v879 = stdlib.lt(v562, v394);
      if (v879) {
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
  appApproval: `ByAKAAEECOLU1ewOAyAoMKCNBiYCAQAAIjUAMRhBAuIpZEkiWzUBJVs1AjYaABdJQQA0IjUEIzUGSSEEDEAAEiEEEkQ2GgE1/4ABATT/UEIAM4GP9cTZAhJEKTX/KDT/UCWvUEIAHjYaAhc1BDYaAzYaARdJIwxAAVdJIQUMQAEAIQUSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yEGWzX+IQdbNf0hCFs1/IE4WzX7gUBbNfqBSFs1+Uk1BTX4gASR8aeaNPhQsDT4IlVAAC2ACAAAAAAAAAHmNPw0+gkWULA0/DT6CRY1BzT/NP40/TT8NPs0+jIGNPlCAUA0+FcBCDX3NPcXSTX2NPw0+gkORDT+NPYLNfU09YgB/LEisgE09rISJLIQMQCyFDT9shGzNPo09gg19IAIAAAAAAAAAjU09BY09hZQNPw09AkWUFCwNPQWNPYWUDT8NPQJFlA1BzT/NP40/TT8NPsjCDT0MgY0+TT1CEIAwyMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hB1s1/iEIWzX9gASai5F0sDT9NP6IAYA0/zEAEkQ0/zQDIQZbNP40/SIiMgYiQgBzSCEJiAFJIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yVbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULAhCYgBD7EisgEishIkshAyCrIUNP6yEbMxADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAijX/Nf41/TX8Nfs1+jX5Nfg0/TT7DEEALDT4NPkWUDT6FlA0+xZQNPwWUDT9FlA0/xZQKEsBVwBQZ0gkNQEyBjUCQgBGsSKyATT/sggjshA0+LIHs7EisgEishIkshAyCbIVMgqyFDT6shGzQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
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
                "name": "v392",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v393",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v394",
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
                "name": "v392",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v393",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v394",
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
                    "name": "_Pharmacy_getSupply0_65",
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
                    "name": "_Pharmacy_purchase0_65",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T10",
                "name": "v467",
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
    "name": "_reach_oe_v486",
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
    "name": "_reach_oe_v565",
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
                    "name": "_Pharmacy_getSupply0_65",
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
                    "name": "_Pharmacy_purchase0_65",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T10",
                "name": "v467",
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
  Bytecode: `0x6080604052604051620017c2380380620017c2833981016040819052620000269162000249565b600080554360035560408051338152825160208083019190915280840151805183850152908101516001600160a01b03166060830152820151608082015290517f57dd92bd95aea54c5537e918ca905e8ab41e33e8440512d93886574b31989f4f9181900360a00190a16200009e3415600762000142565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a8601805151865280518701516001600160a01b03908116865290518b0151835260019788905543909755895195860152925197840197909752519092169481019490945251908301529060a00160405160208183030381529060405260029080519060200190620001399291906200016c565b50505062000333565b81620001685760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017a90620002f6565b90600052602060002090601f0160209004810192826200019e5760008555620001e9565b82601f10620001b957805160ff1916838001178555620001e9565b82800160010185558215620001e9579182015b82811115620001e9578251825591602001919060010190620001cc565b50620001f7929150620001fb565b5090565b5b80821115620001f75760008155600101620001fc565b604051606081016001600160401b03811182821017156200024357634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200025d57600080fd5b604080519081016001600160401b03811182821017156200028e57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002a857600080fd5b620002b262000212565b6020850151815260408501519092506001600160a01b0381168114620002d757600080fd5b6020838101919091526060949094015160408301529283015250919050565b600181811c908216806200030b57607f821691505b602082108114156200032d57634e487b7160e01b600052602260045260246000fd5b50919050565b61147f80620003436000396000f3fe60806040526004361061006e5760003560e01c80634b91f3901161004b5780634b91f390146100e357806383230757146100eb578063ab53f2c614610100578063c462630d1461012357005b80631e93b0f1146100775780632c10a1591461009b578063321ca863146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610f42565b610136565b6100c16100bc366004610f5a565b61015a565b6040805182518152602080840151908201529181015190820152606001610092565b61008861018d565b3480156100f757600080fd5b50600154610088565b34801561010c57600080fd5b5061011561019c565b604051610092929190610f9f565b610075610131366004610fd9565b610239565b61013e610d4b565b61015661015036849003840184611092565b82610259565b5050565b61017e60405180606001604052806000815260200160008152602001600081525090565b61018782610424565b92915050565b6000610197610481565b905090565b6000606060005460028080546101b1906110f6565b80601f01602080910402602001604051908101604052809291908181526020018280546101dd906110f6565b801561022a5780601f106101ff5761010080835404028352916020019161022a565b820191906000526020600020905b81548152906001019060200180831161020d57829003601f168201915b50505050509050915091509091565b610241610d4b565b6101566102533684900384018461112b565b826104ae565b610269600160005414600b610870565b815161028490158061027d57508251600154145b600c610870565b600080805560028054610296906110f6565b80601f01602080910402602001604051908101604052809291908181526020018280546102c2906110f6565b801561030f5780601f106102e45761010080835404028352916020019161030f565b820191906000526020600020905b8154815290600101906020018083116102f257829003601f168201915b505050505080602001905181019061032791906111ef565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161037e34156008610870565b61039b6103943383604001518460600151610896565b6009610870565b80516103b3906001600160a01b03163314600a610870565b6103bb610d86565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169281019290925260608085015184518201528184018051600090819052815190930183905280514394019390935291519091015261041e816108ae565b50505050565b61044860405180606001604052806000815260200160008152602001600081525090565b610450610de1565b602081018051516001905251516040015183905261046c610d4b565b61047682826104ae565b602001519392505050565b600061048b610de1565b6020810151516000905261049d610d4b565b6104a782826104ae565b5192915050565b6104be6004600054146010610870565b81516104d99015806104d257508251600154145b6011610870565b6000808055600280546104eb906110f6565b80601f0160208091040260200160405190810160405280929190818152602001828054610517906110f6565b80156105645780601f1061053957610100808354040283529160200191610564565b820191906000526020600020905b81548152906001019060200180831161054757829003601f168201915b505050505080602001905181019061057c9190611285565b9050610586610e26565b7ff6577fdde4998b863f59dae23a9427c0d3f8366471223c8043b0398188b7bbbf33856040516105b7929190611323565b60405180910390a160006020850151515160018111156105d9576105d961126f565b14156106c2576105eb3415600d610870565b7fee897c21f18f2054daef542ab53f2f6d931e780adfaf81977224be51f017ecdd61061e83606001518460a00151610a56565b60405190815260200160405180910390a161064182606001518360a00151610a56565b835261064b610d86565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092526060808601518451820152608086015182850180519190915260a087015181519093019290925281514393019290925260c08501519051909101526106bc816108ae565b5061041e565b60016020850151515160018111156106dc576106dc61126f565b141561041e57602084015151604001518152606082015160a08301516107119161070591610a56565b8251511115600e610870565b60208201518151516107239190610aa5565b60208201819052610737903414600f610870565b604082015181515161074b91903390610b04565b60a082015181515161075d9190610b18565b60408201818152606080840180519390935283515192516020019290925290830151905161078b9190610a56565b606082810180516040908101939093525182518151815260208281015190820152908301518184015291517f8b38028a653aca198c45a20cbc3dcf92092edda7db6fd68f9431af9fb69770f39281900390910190a1606081015160208401526107f2610d86565b825181516001600160a01b039182169052602080850151835190910152604080850151835192169101526060808401518251909101526080830151610838906001610b18565b6020828101805192909252604084810151835183015282514391015260c085015190840151915191016060909101526106bc816108ae565b816101565760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006108a483853085610b65565b90505b9392505050565b805160600151602080830151015110156109fa576109146040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051516080860152805183015160a086015251015160c084015260046000554360015590516109d19183910181516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b604051602081830303815290604052600290805190602001906109f5929190610e73565b505050565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610a3c573d6000803e3d6000fd5b5060008080556001819055610a5390600290610ef7565b50565b600082610a6383826113a0565b91508111156101875760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b604482015260640161088d565b6000811580610ac957508282610abb81836113b7565b9250610ac790836113d6565b145b6101875760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161088d565b610b0f838383610c3f565b6109f557600080fd5b600082610b2583826113f8565b91508110156101875760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161088d565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610bcc91611410565b60006040518083038185875af1925050503d8060008114610c09576040519150601f19603f3d011682016040523d82523d6000602084013e610c0e565b606091505b5091509150610c1f82826001610d10565b5080806020019051810190610c34919061142c565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610c9e91611410565b60006040518083038185875af1925050503d8060008114610cdb576040519150601f19603f3d011682016040523d82523d6000602084013e610ce0565b606091505b5091509150610cf182826002610d10565b5080806020019051810190610d06919061142c565b9695505050505050565b60608315610d1f5750816108a7565b825115610d2f5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161088d565b604051806040016040528060008152602001610d8160405180606001604052806000815260200160008152602001600081525090565b905290565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610d816040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001610d8160408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b6040805160a08101909152600060808201908152819081526020016000815260200160008152602001610d8160405180606001604052806000815260200160008152602001600081525090565b828054610e7f906110f6565b90600052602060002090601f016020900481019282610ea15760008555610ee7565b82601f10610eba57805160ff1916838001178555610ee7565b82800160010185558215610ee7579182015b82811115610ee7578251825591602001919060010190610ecc565b50610ef3929150610f2d565b5090565b508054610f03906110f6565b6000825580601f10610f13575050565b601f016020900490600052602060002090810190610a5391905b5b80821115610ef35760008155600101610f2e565b600060408284031215610f5457600080fd5b50919050565b600060208284031215610f6c57600080fd5b5035919050565b60005b83811015610f8e578181015183820152602001610f76565b8381111561041e5750506000910152565b8281526040602082015260008251806040840152610fc4816060850160208701610f73565b601f01601f1916919091016060019392505050565b600060808284031215610f5457600080fd5b6040805190810167ffffffffffffffff8111828210171561101c57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561101c57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561101c57634e487b7160e01b600052604160045260246000fd5b8015158114610a5357600080fd5b6000604082840312156110a457600080fd5b6040516040810181811067ffffffffffffffff821117156110d557634e487b7160e01b600052604160045260246000fd5b6040528235815260208301356110ea81611084565b60208201529392505050565b600181811c9082168061110a57607f821691505b60208210811415610f5457634e487b7160e01b600052602260045260246000fd5b6000818303608081121561113e57600080fd5b611146610feb565b833581526060601f198301121561115c57600080fd5b611164611022565b61116c611053565b60208601356002811061117e57600080fd5b8152604086013561118e81611084565b806020830152506020605f19850112156111a757600080fd5b6111af611022565b60609690960135865260408101959095529384526020810193909352509092915050565b80516001600160a01b03811681146111ea57600080fd5b919050565b60006080828403121561120157600080fd5b6040516080810181811067ffffffffffffffff8211171561123257634e487b7160e01b600052604160045260246000fd5b60405261123e836111d3565b815260208301516020820152611256604084016111d3565b6040820152606083015160608201528091505092915050565b634e487b7160e01b600052602160045260246000fd5b600060e0828403121561129757600080fd5b60405160e0810181811067ffffffffffffffff821117156112c857634e487b7160e01b600052604160045260246000fd5b6040526112d4836111d3565b8152602083015160208201526112ec604084016111d3565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a0830191906002811061136457634e487b7160e01b600052602160045260246000fd5b806040850152506020810151151560608401526040810151516080840152509392505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156113b2576113b261138a565b500390565b60008160001904831182151516156113d1576113d161138a565b500290565b6000826113f357634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561140b5761140b61138a565b500190565b60008251611422818460208701610f73565b9190910192915050565b60006020828403121561143e57600080fd5b81516108a78161108456fea26469706673582212204c325f98f0184030efec6b4bd9af6081037589f734c793d5c55d9fdf9643326364736f6c634300080c0033`,
  BytecodeLen: 6082,
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
    at: './index.rsh:62:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:39:46:after expr stmt semicolon',
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
