//Sun Jan 19 2025 14:38:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
ENV_ADDRESS = "https://blog.94wan.fun";
const {
  sign,
  getToken,
  wait,
  checkCk,
  User_Agent,
  validateCarme,
  getCookieMap,
  randomString
} = require("./common.js");
const login_tips = "需要登录, 请重新登录";
let CookieEles = [""];
let ckMap = new Map();
var deviceId;
var utdid;
let t;
if (process.env.ELE_COOKIE) {
  if (process.env.ELE_COOKIE.indexOf("&") > -1) {
    CookieEles = process.env.ELE_COOKIE.split("&");
  } else {
    if (process.env.ELE_COOKIE.indexOf("\n") > -1) {
      CookieEles = process.env.ELE_COOKIE.split("\n");
    } else {
      CookieEles = [process.env.ELE_COOKIE];
    }
  }
}
const https = require("https");
const http = require("http");
const request = require("request");
function getJson(_0x38ee8d, _0xcfb629, _0x3aad74, _0x1dada9, _0x2ff23d, _0x368a15, _0x16c8b0) {
  const _0x543f90 = {
    data: _0x38ee8d,
    api: _0xcfb629,
    pageId: decodeURIComponent(_0x3aad74),
    sid: _0x1dada9,
    uid: _0x2ff23d,
    deviceId: _0x368a15,
    utdid: _0x16c8b0
  };
  let _0x5596f6 = _0x543f90;
  _0x5596f6 = encodeURIComponent(JSON.stringify(_0x5596f6));
  let _0x52492b = "";
  return new Promise(_0x427459 => {
    http.get("http://frp.104300.xyz:22023/api/getXSign?content=" + _0x5596f6, _0x411c6b => {
      _0x411c6b.on("data", _0x2e9dcf => {
        _0x52492b += _0x2e9dcf.toString();
      });
      _0x411c6b.on("end", () => {
        _0x427459(_0x52492b);
      });
    });
  });
}
async function runBefore15(_0x3af337, _0x5143d1, _0x12a91c = "") {
  const _0x151f61 = {
    resId: "223166",
    source: "mtop",
    extra: "{\"missionDefId\":" + _0x3af337 + ",\"missionCollectionId\":" + _0x5143d1 + ",\"missionType\":\"PAGEVIEW\",\"source\":\"mtop\",\"missionXId\":\"" + _0x12a91c + "\"}",
    callSource: "biz_code_main",
    latitude: "30.153526850044727",
    longitude: "120.37615790963173"
  };
  let _0x147481 = _0x151f61;
  _0x147481 = JSON.stringify(_0x147481);
  rApi = "mtop.alibaba.svip.langrisser.act";
  rpageId = encodeURIComponent("https://air.tb.ele.me/app/conch-page/svip-home-tasklist-new/home?navType=4&status_bar_transparent=true&latitude=30.202044993638992&pha=true&hideNavbar=1&longitude=120.20137779414654");
  let _0x406bfd = ckMap.get("cookie2");
  let _0x4be594 = ckMap.get("unb");
  var _0x1a1b70 = await getJson(_0x147481, rApi, rpageId, _0x406bfd, _0x4be594, deviceId, utdid);
  _0x1a1b70 = JSON.parse(_0x1a1b70);
  sgext = encodeURIComponent(_0x1a1b70["x-sgext"]);
  xsign = encodeURIComponent(_0x1a1b70["x-sign"]);
  umt = encodeURIComponent(_0x1a1b70["x-umt"]);
  mini_wua = encodeURIComponent(_0x1a1b70["x-mini-wua"]);
  let _0x191576 = _0x1a1b70["x-t"];
  wua = encodeURIComponent(_0x1a1b70.wua);
  const _0x4cb755 = {
    "x-sgext": sgext,
    "x-sign": xsign,
    "x-devid": deviceId,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": mini_wua,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x191576,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": umt,
    "x-utdid": utdid,
    "x-appkey": "24895413",
    "x-page-url": rpageId,
    Host: "waimai-guide.ele.me",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B12%3BGoogle%3BPixel+4+XL%29",
    "x-sid": _0x406bfd,
    "x-uid": _0x4be594,
    asac: "2A21119A45TTVAEXP40N7N"
  };
  headers = _0x4cb755;
  url = "https://waimai-guide.ele.me/gw/mtop.alibaba.svip.langrisser.act/1.0/?data=" + encodeURIComponent(_0x147481) + "&type=originaljson&wua=" + wua;
  return new Promise(_0x262de5 => {});
}
async function runOne(_0x24effb, _0x364323, _0x259217 = "SIMPLESIGNIN", _0x26c0b4 = null) {
  rData = "{\"resId\":\"223166\",\"source\":\"mtop\",\"extra\":\"{\\\"missionDefId\\\":" + _0x24effb + ",\\\"missionCollectionId\\\":" + _0x364323 + ",\\\"missionType\\\":\\\"" + _0x259217 + "\\\",\\\"source\\\":\\\"mtop\\\",\\\"missionXId\\\":\\\"" + _0x26c0b4 + "\\\"}\",\"callSource\":\"biz_code_main\",\"latitude\":\"30.202044993638992\",\"longitude\":\"120.20137779414654\"}";
  rApi = "mtop.alibaba.svip.langrisser.act";
  rpageId = encodeURIComponent("https://air.tb.ele.me/app/conch-page/svip-home-tasklist-new/home?navType=4&status_bar_transparent=true&latitude=30.202044993638992&pha=true&hideNavbar=1&longitude=120.20137779414654");
  let _0x5014fe = ckMap.get("cookie2");
  let _0x2ca53c = ckMap.get("unb");
  var _0x286e40 = await getJson(rData, rApi, rpageId, _0x5014fe, _0x2ca53c, deviceId, utdid);
  _0x286e40 = JSON.parse(_0x286e40);
  sgext = encodeURIComponent(_0x286e40["x-sgext"]);
  xsign = encodeURIComponent(_0x286e40["x-sign"]);
  umt = encodeURIComponent(_0x286e40["x-umt"]);
  mini_wua = encodeURIComponent(_0x286e40["x-mini-wua"]);
  let _0x1da247 = _0x286e40["x-t"];
  wua = encodeURIComponent(_0x286e40.wua);
  const _0x22b042 = {
    "x-sgext": sgext,
    "x-sign": xsign,
    "x-devid": deviceId,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": mini_wua,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x1da247,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": umt,
    "x-utdid": utdid,
    "x-appkey": "24895413",
    "x-page-url": rpageId,
    Host: "waimai-guide.ele.me",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B12%3BGoogle%3BPixel+4+XL%29",
    "x-sid": _0x5014fe,
    "x-uid": _0x2ca53c,
    asac: "2A21119A45TTVAEXP40N7N"
  };
  headers = _0x22b042;
  url = "https://waimai-guide.ele.me/gw/mtop.alibaba.svip.langrisser.act/1.0/?data=" + encodeURIComponent(rData) + "&type=originaljson&wua=" + wua;
  return new Promise(_0x44c079 => {});
}
async function runOne15Task() {
  let _0xff2af7 = await queryTask();
  for (var _0x3e38ca in _0xff2af7.data.data) {
    let _0xea5d4a = _0xff2af7.data.data[_0x3e38ca].data;
    for (let _0x561923 = 0; _0x561923 < _0xea5d4a.length; _0x561923++) {
      let _0x26d866 = _0xea5d4a[_0x561923];
      const _0x3a0c28 = _0x26d866.missionType;
      if (!("PAGEVIEW" === _0x3a0c28)) {
        let _0x3c7780 = await runOne(_0x26d866.missionDefId, _0x26d866.missionCollectionId, "SIMPLESIGNIN", _0x26d866.missionXId);
        console.log((_0x26d866.showTitle + "：" || "") + (_0x3c7780.data.msgInfo || _0x3c7780.ret || "success✅"));
        await wait(getRandom(3, 5));
      }
    }
  }
}
async function runOne15(_0x2ae0d4, _0x164bab, _0xb51d77, _0x453df4, _0x56ab7b) {
  l = new Date().getTime();
  const _0x2a7771 = {
    collectionId: _0xb51d77,
    missionId: _0x164bab,
    actionCode: "PAGEVIEW",
    pageFrom: _0x453df4,
    missionXId: _0x56ab7b,
    viewTime: 15,
    bizScene: "svip",
    accountPlan: "HAVANA_COMMON",
    sync: true,
    asac: "2A21119A45TTVAEXP40N7N",
    ua: "defaultUA1_uab_not_loaded@@" + _0x2ae0d4 + "@@" + l,
    umidtoken: "defaultToken1_um_not_loaded@@" + _0x2ae0d4 + "@@" + l
  };
  rData = JSON.stringify(_0x2a7771);
  rApi = "mtop.ele.biz.growth.task.event.pageview";
  rpageId = _0x2ae0d4 + "?missioncollectid=" + _0xb51d77 + "&missionid=" + _0x164bab + "&taskfrom=" + _0x453df4 + "&bizscene=svip&taskpageviewasac=2A21119A45TTVAEXP40N7N&longitude=120.37615790963173&latitude=30.153526850044727&spm=a2ogi.bx105771.tasklayer_scantask.3";
  rpageId = encodeURIComponent(rpageId);
  let _0x593116 = ckMap.get("cookie2");
  let _0x3e7762 = ckMap.get("unb");
  var _0x41f982 = await getJson(rData, rApi, rpageId, _0x593116, _0x3e7762, deviceId, utdid);
  _0x41f982 = JSON.parse(_0x41f982);
  sgext = encodeURIComponent(_0x41f982["x-sgext"]);
  xsign = encodeURIComponent(_0x41f982["x-sign"]);
  umt = encodeURIComponent(_0x41f982["x-umt"]);
  mini_wua = encodeURIComponent(_0x41f982["x-mini-wua"]);
  let _0x6eb40e = _0x41f982["x-t"];
  wua = encodeURIComponent(_0x41f982.wua);
  const _0x8b237 = {
    "x-sgext": sgext,
    "x-sign": xsign,
    "x-devid": deviceId,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": mini_wua,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x6eb40e,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": umt,
    "x-utdid": utdid,
    "x-appkey": "24895413",
    "x-page-url": rpageId,
    Host: "mtop.ele.me",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B12%3BGoogle%3BPixel+3+XL%29",
    "x-sid": _0x593116,
    "x-uid": _0x3e7762,
    asac: "2A21119A45TTVAEXP40N7N"
  };
  headers = _0x8b237;
  let _0x2ed35f = "wua=" + wua + "&data=" + encodeURIComponent(rData) + "&asac=2A21119A45TTVAEXP40N7N";
  const _0x1f7312 = {
    body: _0x2ed35f,
    method: "POST",
    url: "https://mtop.ele.me/gw/mtop.ele.biz.growth.task.event.pageview/1.0/",
    headers: headers
  };
  return new Promise(_0x4d4d85 => {
    request(_0x1f7312, (_0x4e1d31, _0xa5c400, _0x49a12c) => {
      if (!_0x4e1d31 && _0xa5c400.statusCode == 200) {
        console.log(_0x49a12c);
        _0x4d4d85(JSON.parse(_0x49a12c));
      }
    });
  });
}
function queryTask() {
  var _0x3ee416 = getToken(t);
  _0x3ee416 = _0x3ee416.split("_")[0];
  const _0x57c564 = {
    Cookie: t,
    "User-Agent": User_Agent
  };
  var _0x37d39d = 12574478,
    _0x26a84f = new Date().getTime(),
    _0x6b66d7 = "%7B%22callSource%22%3A%22biz_card_main%22%2C%22lgrsRequestItems%22%3A%22%5B%7B%5C%22resId%5C%22%3A%5C%22224166%5C%22%7D%5D%22%2C%22extra%22%3A%22%7B%5C%22source%5C%22%3A%5C%22mtop%5C%22%7D%22%2C%22latitude%22%3A%2230.201846845448017%22%2C%22longitude%22%3A%22120.20090874284506%22%7D";
  u = sign(_0x3ee416 + "&" + _0x26a84f + "&" + _0x37d39d + "&" + decodeURIComponent(_0x6b66d7));
  l = "https://waimai-guide.ele.me/h5/mtop.alibaba.svip.langrisser.query/1.0/?jsv=2.6.2&appKey=12574478&t=" + _0x26a84f + "&sign=" + u + "&data=%7B%22callSource%22%3A%22biz_card_main%22%2C%22lgrsRequestItems%22%3A%22%5B%7B%5C%22resId%5C%22%3A%5C%22224166%5C%22%7D%5D%22%2C%22extra%22%3A%22%7B%5C%22source%5C%22%3A%5C%22mtop%5C%22%7D%22%2C%22latitude%22%3A%2230.201846845448017%22%2C%22longitude%22%3A%22120.20090874284506%22%7D&type=originaljson";
  const _0x154902 = {
    hostname: "waimai-guide.ele.me",
    headers: _0x57c564,
    path: l
  };
  let _0x4a7efd = "";
  return new Promise(_0x1593a1 => {
    https.get(_0x154902, _0x2f4af7 => {
      _0x2f4af7.on("data", _0x450b25 => {
        _0x4a7efd += _0x450b25.toString();
      });
      _0x2f4af7.on("end", _0x41036c => {
        _0x1593a1(JSON.parse(_0x4a7efd));
      });
    });
  });
}
function getCoupsRecord() {
  const _0x1a1404 = {
    Cookie: t,
    "User-Agent": User_Agent
  };
  const _0x346573 = {
    path: "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?latitude=30.153352&limit=20&longitude=104.153352&offset=0",
    hostname: "h5.ele.me",
    headers: _0x1a1404
  };
  let _0x5f3bc2 = "";
  return new Promise(_0x144fc0 => {
    https.get(_0x346573, _0x1041a3 => {
      _0x1041a3.on("data", _0x1a17f2 => {
        _0x1a17f2 = _0x1a17f2.toString();
        _0x5f3bc2 += _0x1a17f2;
      });
      _0x1041a3.on("end", () => {
        _0x144fc0(JSON.parse(_0x5f3bc2));
      });
    });
  });
}
function signIn() {
  a = getToken(t);
  a = a.split("_")[0];
  const _0x2a5a3b = {
    "content-type": "application/json",
    Cookie: t,
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36"
  };
  headers = _0x2a5a3b;
  r = 12574478;
  c = new Date().getTime();
  l = "{\"bizScene\":\"svip_sign_scene\",\"asac\":\"2A227051WYEVFLNT5WTFAM\",\"unionId\":\"o_PVDuGAltr6cWSNlAI_vhPxlmRc\",\"latitude\":\"32.114736\",\"longitude\":\"119.414544\"}";
  d = sign(a + "&" + c + "&" + r + "&" + l);
  f = "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/?jsv=2.6.2&appKey=12574478&t=" + c + "&sign=" + d + "&api=mtop.koubei.interactioncenter.sign.component.recordsignin&v=1.0&type=originaljson&dataType=json&dangerouslySetWindvaneParams=%7B%22instanceid%22%3A%22INNER%22%7D&xua=true&location=true&isSec=1&needWua=true&isNeedwua=true&secType=2&timeout=8000&valueType=original&ttid=wxece3a9a4c82f58c9%40wechat_android_10.11.7&data=" + encodeURIComponent(l);
  const _0x36ad8a = {
    hostname: "mtop.ele.me",
    headers: headers,
    path: f
  };
  let _0x3261f4 = "";
  return new Promise(_0x4f4c63 => {
    https.get(_0x36ad8a, _0xaf7256 => {
      _0xaf7256.on("data", _0x334d50 => {
        _0x3261f4 += _0x334d50.toString();
        setTimeout(() => {
          _0x4f4c63(JSON.parse(_0x3261f4));
        }, 500);
      });
    });
  });
}
const getUserInfo = () => {
  const _0x3f7e01 = {
    Cookie: t,
    "user-agent": User_Agent
  };
  const _0x52cbe0 = {
    hostname: "restapi.ele.me",
    path: "/eus/v5/user_detail",
    headers: _0x3f7e01
  };
  let _0x4ba3c0 = "";
  return new Promise(_0x6d4c07 => {
    https.get(_0x52cbe0, _0x2065a0 => {
      _0x2065a0.on("data", _0xfa407 => {
        _0x4ba3c0 += _0xfa407.toString();
      });
      _0x2065a0.on("end", () => {
        _0x6d4c07(JSON.parse(_0x4ba3c0));
      });
    });
  });
};
(async function a() {
  for (let _0x51f12c = 0; _0x51f12c < CookieEles.length; _0x51f12c++) {
    t = CookieEles[_0x51f12c];
    ckMap = getCookieMap(t);
    deviceId = randomString(44);
    utdid = randomString(24);
    if (!t) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        t = await checkCk(t);
        if (t == login_tips) {
          console.log("第", _0x51f12c + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        let _0x30b05b = await getUserInfo();
        if (_0x30b05b.name == "UNAUTHORIZED") {
          console.log("第", _0x51f12c + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        console.log("******开始【饿了么账号", _0x51f12c + 1, "】", _0x30b05b.username, "*********");
        let _0x3346f1 = await getCoupsRecord();
        console.log("【当前吃货豆😋】:", _0x3346f1.peaCount);
        let _0x4cff6d = await signIn();
        if (_0x4cff6d.data.errorMsg) {
          console.log("【签到信息】:", _0x4cff6d.data.popupTitle || _0x4cff6d.data.errorMsg);
        }
        await runOne15Task();
        let _0x460add = await getCoupsRecord();
        let _0x5b76b8 = await getMonthRecord();
        console.log("【当前吃货豆😋】:", _0x460add.peaCount, ",今日获取吃货豆😋：", _0x5b76b8);
      } catch (_0x54983a) {
        console.log(_0x54983a);
      }
    }
  }
  process.exit(0);
})();
function getCurrentTime() {
  var _0x55aef2 = new Date(),
    _0x415dc2 = _0x55aef2.getMonth() + 1,
    _0x373d86 = _0x55aef2.getDate();
  _0x415dc2 <= 9 && (_0x415dc2 = "0" + _0x415dc2);
  _0x373d86 <= 9 && (_0x373d86 = "0" + _0x373d86);
  return _0x55aef2.getFullYear() + "-" + _0x415dc2 + "-" + _0x373d86;
}
async function getMonthRecord() {
  const _0x466113 = {
    "content-type": "application/json",
    Cookie: t,
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36"
  };
  s = _0x466113;
  r = "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?offset=0&limit=100&longitude=39.916527&latitude=116.397128";
  const _0x372be7 = {
    hostname: "h5.ele.me",
    path: r,
    headers: s
  };
  let _0x525221 = "";
  return new Promise(_0x5ecc15 => {
    https.get(_0x372be7, _0x4cee54 => {
      _0x4cee54.on("data", _0x230f25 => {
        _0x525221 += _0x230f25.toString();
      });
      _0x4cee54.on("end", () => {
        try {
          var _0x1a5929 = JSON.parse(_0x525221);
          for (var _0x20b598 = getCurrentTime(), _0x4c4e38 = _0x1a5929.records, _0x24e608 = 0, _0x1e41b5 = 0; _0x1e41b5 < _0x4c4e38.length; _0x1e41b5++) {
            _0x4c4e38[_0x1e41b5].createdTime.indexOf(_0x20b598) > -1 && 1 == _0x4c4e38[_0x1e41b5].optType && (_0x24e608 += _0x4c4e38[_0x1e41b5].count);
          }
          _0x5ecc15(_0x24e608);
        } catch (_0x56cec4) {
          _0x5ecc15(_0x56cec4);
        }
      });
    });
  });
}
function getRandom(_0x1a8d27, _0xf1249f) {
  var _0x22f741 = Math.floor(Math.random() * (_0xf1249f - _0x1a8d27 + 1) + _0x1a8d27);
  return _0x22f741;
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}