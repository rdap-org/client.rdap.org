// see https://www.iana.org/assignments/rdap-json-values
var rdapStatusInfo = {
  "validated": "Signifies that the data of the object instance has been found to be accurate. This type of status is usually found on entity object instances to note the validity of identifying contact information.",
  "renew prohibited": "Renewal or reregistration of the object instance is forbidden.",
  "update prohibited": "Updates to the object instance are forbidden.",
  "transfer prohibited": "Transfers of the registration from one registrar to another are forbidden. This type of status normally applies to DNR domain names.",
  "delete prohibited": "Deletion of the registration of the object instance is forbidden. This type of status normally applies to DNR domain names.",
  "proxy": "The registration of the object instance has been performed by a third party. This is most commonly applied to entities.",
  "private": "The information of the object instance is not designated for public consumption. This is most commonly applied to entities.",
  "removed": "Some of the information of the object instance has not been made available and has been removed. This is most commonly applied to entities.",
  "obscured": "Some of the information of the object instance has been altered for the purposes of not readily revealing the actual information of the object instance. This is most commonly applied to entities.",
  "associated": "The object instance is associated with other object instances in the registry. This is most commonly used to signify that a nameserver is associated with a domain or that an entity is associated with a network resource or domain.",
  "active": "The object instance is in use. For domain names, it signifies that the domain name is published in DNS. For network and autnum registrations it signifies that they are allocated or assigned for use in operational networks. This maps to the Extensible Provisioning Protocol (EPP) [RFC5730] 'OK' status.",
  "inactive": "The object instance is not in use. See 'active'.",
  "locked": "Changes to the object instance cannot be made, including the association of other object instances.",
  "pending create": "A request has been received for the creation of the object instance but this action is not yet complete.",
  "pending renew": "A request has been received for the renewal of the object instance but this action is not yet complete.",
  "pending transfer": "A request has been received for the transfer of the object instance but this action is not yet complete.",
  "pending update": "A request has been received for the update or modification of the object instance but this action is not yet complete.",
  "pending delete": "A request has been received for the deletion or removal of the object instance but this action is not yet complete. For domains, this might mean that the name is no longer published in DNS but has not yet been purged from the registry database.",
  "add period": "This grace period is provided after the initial registration of the object. If the object is deleted by the client during this period, the server provides a credit to the client for the cost of the registration. This maps to the Domain Registry Grace Period Mapping for the Extensible Provisioning Protocol (EPP) [RFC3915] 'addPeriod' status.",
  "auto renew period": "This grace period is provided after an object registration period expires and is extended (renewed) automatically by the server. If the object is deleted by the client during this period, the server provides a credit to the client for the cost of the auto renewal. This maps to the Domain Registry Grace Period Mapping for the Extensible Provisioning Protocol (EPP) [RFC3915] 'autoRenewPeriod' status.",
  "client delete prohibited": "The client requested that requests to delete the object MUST be rejected. This maps to the Extensible Provisioning Protocol (EPP) Domain Name Mapping [RFC5731], Extensible Provisioning Protocol (EPP) Host Mapping [RFC5732], and Extensible Provisioning Protocol (EPP) Contact Mapping [RFC5733] 'clientDeleteProhibited' status.",
  "client hold": "The client requested that the DNS delegation information MUST NOT be published for the object. This maps to the Extensible Provisioning Protocol (EPP) Domain Name Mapping [RFC5731] 'clientHold' status.",
  "client renew prohibited": "The client requested that requests to renew the object MUST be rejected. This maps to the Extensible Provisioning Protocol (EPP) Domain Name Mapping [RFC5731] 'clientRenewProhibited' status.",
  "client transfer prohibited": "The client requested that requests to transfer the object MUST be rejected. This maps to the Extensible Provisioning Protocol (EPP) Domain Name Mapping [RFC5731] and Extensible Provisioning Protocol (EPP) Contact Mapping [RFC5733] 'clientTransferProhibited' status.",
  "client update prohibited": "The client requested that requests to update the object (other than to remove this status) MUST be rejected. This maps to the Extensible Provisioning Protocol (EPP) Domain Name Mapping [RFC5731], Extensible Provisioning Protocol (EPP) Host Mapping [RFC5732], and Extensible Provisioning Protocol (EPP) Contact Mapping [RFC5733] 'clientUpdateProhibited' status.",
  "pending restore": "An object is in the process of being restored after being in the redemption period state. This maps to the Domain Registry Grace Period Mapping for the Extensible Provisioning Protocol (EPP) [RFC3915] 'pendingRestore' status.",
  "redemption period": "A delete has been received, but the object has not yet been purged because an opportunity exists to restore the object and abort the deletion process. This maps to the Domain Registry Grace Period Mapping for the Extensible Provisioning Protocol (EPP) [RFC3915] 'redemptionPeriod' status.",
  "renew period": "This grace period is provided after an object registration period is explicitly extended (renewed) by the client. If the object is deleted by the client during this period, the server provides a credit to the client for the cost of the renewal. This maps to the Domain Registry Grace Period Mapping for the Extensible Provisioning Protocol (EPP) [RFC3915] 'renewPeriod' status.",
  "server delete prohibited": "The server set the status so that requests to delete the object MUST be rejected. This maps to the Extensible Provisioning Protocol (EPP) Domain Name Mapping [RFC5731], Extensible Provisioning Protocol (EPP) Host Mapping [RFC5732], and Extensible Provisioning Protocol (EPP) Contact Mapping [RFC5733] 'serverDeleteProhibited' status.",
  "server renew prohibited": "The server set the status so that requests to renew the object MUST be rejected. This maps to the Extensible Provisioning Protocol (EPP) Domain Name Mapping [RFC5731] 'serverRenewProhibited' status.",
  "server transfer prohibited": "The server set the status so that requests to transfer the object MUST be rejected. This maps to the Extensible Provisioning Protocol (EPP) Domain Name Mapping [RFC5731] and Extensible Provisioning Protocol (EPP) Contact Mapping [RFC5733] 'serverTransferProhibited' status.",
  "server update prohibited": "The server set the status so that requests to update the object (other than to remove this status) MUST be rejected. This maps to the Extensible Provisioning Protocol (EPP) Domain Name Mapping [RFC5731], Extensible Provisioning Protocol (EPP) Host Mapping [RFC5732], and Extensible Provisioning Protocol (EPP) Contact Mapping [RFC5733] 'serverUpdateProhibited' status.",
  "server hold": "The server set the status so that DNS delegation information MUST NOT be published for the object. This maps to the Extensible Provisioning Protocol (EPP) Domain Name Mapping [RFC5731] 'serverHold' status.",
  "transfer period": "This grace period is provided after the successful transfer of object registration sponsorship from one client to another client. If the object is deleted by the client during this period, the server provides a credit to the client for the cost of the transfer. This maps to the Domain Registry Grace Period Mapping for the Extensible Provisioning Protocol (EPP) [RFC3915] 'transferPeriod' status.",
  "administrative": "The object instance has been allocated administratively (i.e., not for use by the recipient in their own right in operational networks).",
  "reserved": "The object instance has been allocated to an IANA special-purpose address registry.",
};

// list of RDAP bootstrap registry URLs
var registryURLs = {
  "https://data.iana.org/rdap/asn.json": "autnum",
  "https://data.iana.org/rdap/dns.json": "domain",
  "https://data.iana.org/rdap/ipv4.json": "ip4",
  "https://data.iana.org/rdap/ipv6.json": "ip6",
  "https://data.iana.org/rdap/object-tags.json": "entity",
};

// keeps track of how many registries we've loaded
var loadedRegistries = 0;

// registry data is stored in this
var registryData = {};

// keeps track of the elements we've created so we can assign a unique ID
var elementCounter = 123456;

var cardTitles = {
  "domain": "Domain Name",
  "ip network": "IP Network",
  "nameserver": "Nameserver",
  "entity": "Entity",
  "autnum": "AS Number",
};

// event handler for when the query type changes
function updatePlaceHolder(type) {
  var input = document.getElementById('object');

  switch (type) {
    case 'ip':
      input.placeholder = '192.168.0.1/16';
      break;

    case 'autnum':
      input.placeholder = '65535';
      break;

    case 'entity':
      input.placeholder = 'ABC123-EXAMPLE';
      break;

    case 'url':
      input.placeholder = 'https://rdap.org/domain/example.com';
      break;

    case 'tld':
      input.placeholder = 'example';
      break;

    case 'registrar':
      input.placeholder = '9999';
      break;

    case 'json':
      input.placeholder = '{ (paste JSON) }';
      break;

    default:
      input.placeholder = 'example.com';
  }
}

function createXHR(url) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.timeout = 25000;
  xhr.responseType = 'json';

  return xhr;
}

// event handler for when the submit button is pressed, or
// when the user clicks on a link to an RDAP URL
function doQuery() {
  var type    = document.getElementById('type');
  var typeval = type.options[type.selectedIndex].value;
  var object  = document.getElementById('object').value.toLowerCase();

  if ('autnum' == typeval) {
    object = object.replace(/^asn?/i, '');
  }

  var queryParams = '?jscard=1';

  var followReferral = document.getElementById('follow-referral').checked;

  var url;
  if ('url' == typeval) {
    url = object;

  } else if ('tld' == typeval) {
    url = 'https://rdap.iana.org/domain/' + object + queryParams;

  } else if ('registrar' == typeval) {
    url = 'https://registrars.rdap.org/entity/' + object + '-IANA' + queryParams;

  } else if ('json' == typeval) {
    url = 'json://' + object;

  } else {
    url = getRDAPURL(typeval, object);
    if (url) url += queryParams;

  }

  if (!url) {
    handleError('No RDAP URL available for ' + typeval + ' ' + object + '.');

  } else {
    sendQuery(url, followReferral);

  }
}

// construct an RDAP URL for the given object
function getRDAPURL(typeval, object) {
  var urls;

  services:
  for (var i in registryData[typeval]) {
    var service = registryData[typeval][i];

    // special case for object tags, since the registrant email address is in the 0th position
    var [rangeIndex, urlIndex] = ('entity' == typeval ? [1, 2] : [0, 1]);

    for (var j in service[rangeIndex]) {
      var range = service[rangeIndex][j];

      var match = false;
      if ('domain' == typeval) {
        match = domainMatch(range, object);

      } else if ('autnum' == typeval) {
        match = asnMatch(range, object);

      } else if ('entity' == typeval) {
        match = entityMatch(range, object);

      } else if ('ip' == typeval) {
        match = ipMatch(range, object);

      }

      if (match) {
        urls = service[urlIndex];
        break services;
      }
    }
  }

  if (!urls) {
    // no match
    return false;

  } else {
    var url = getBestURL(urls);

    // some bootstrap entries have a trailing slash, some don't
    if (!url.endsWith('/')) url += '/';

    return url + typeval + '/' + object;
  }
}

function domainMatch(tld, domain) {
  if (tld == '' && !domain.includes('.')) {
    // an empty TLD indicates the root zone, and no dot indicates domain
    // is a TLD
    return true;

  } else {
    return punycode.toASCII(domain).toUpperCase().endsWith('.' + tld.toUpperCase());

  }
}

function asnMatch(range, asn) {
  var [min, max] = range.split('-', 2);
  min = parseInt(min);
  max = parseInt(max);

  return (asn >= min && asn <= max);
}

function entityMatch(tag, handle) {
  return handle.toUpperCase().endsWith('-' + tag.toUpperCase());
}

function ipMatch(prefix, ip) {
  prefix = ipaddr.parseCIDR(prefix);
  if (ip.includes("/")) {
    ip = ipaddr.parseCIDR(ip);
    return (ip[0].kind() == prefix[0].kind() && ip[0].match(prefix));

  } else {
    ip = ipaddr.parse(ip);
    return (ip.kind() == prefix[0].kind() && ip.match(prefix));

  }
}

// return the first HTTPS url, or the first URL
function getBestURL(urls) {
  for (var i in urls) {
    if (urls[i].startsWith('https://')) return urls[i];
  }
  return urls[0];
}

// given a URL, injects that URL into the query input,
// and initiates an RDAP query
function runQuery(url) {
  var type = document.getElementById('type');

  for (var i = 0 ; i < type.options.length ; i++) if ('url' == type.options[i].value) type.selectedIndex = i;
  document.getElementById('object').value = url;
  doQuery();
}

function showSpinner(msg) {
  msg = msg ? msg : 'Loading...';

  var div = document.getElementById('output-div');
  div.innerHTML = '';

  var spinner = document.createElement('div');
  spinner.classList.add('spinner-border');
  spinner.role = 'status';
  var span = spinner.appendChild(document.createElement('span'));
  span.classList.add('visually-hidden');
  span.appendChild(document.createTextNode(msg));

  div.appendChild(spinner);

  var msgDiv = document.createElement('div');
  msgDiv.id = 'spinner-msg';
  msgDiv.appendChild(document.createTextNode(msg));
  div.appendChild(msgDiv);
}

let lastQueriedURL = null;

// disable the user interface, initiate an XHR
function sendQuery(url, followReferral=false, followingReferral=true) {
  freezeUI();

  lastQueriedURL = null;

  if (0 == url.indexOf('json://')) {
    // run the callback with a mock XHR
    handleResponse(
      {
        "status": 200,
        "response": JSON.parse(url.substring(7))
      },
      followReferral,
      followingReferral
    );

  } else {
    let xhr = createXHR(url);

    xhr.ontimeout = function() {
      thawUI();
      handleError('Timeout performing query, please try again later.');
    };

    xhr.onload = function() { handleResponse(xhr, followReferral, followingReferral); };

    xhr.onreadystatechange = function() {
      if (4 == xhr.readyState && xhr.status < 1) {
        //
        // this condition happens when an RDAP server - usually a
        // registrar's RDAP server - doesn't send the
        // Access-Control-Allow-Origin header. Browsers are not supposed
        // to allow JavaScript code to detect this condition (to make it
        // harder to perform XSRF attacks) but this seems to work in
        // Chrome and Safari - for now...
        //

        thawUI();

        let msg = 'Unable to perform query. This may be because the '
                      + 'RDAP server is not properly setting the '
                      + 'Access-Control-Allow-Origin header. If the '
                      + 'problem persists, please contact the server '
                      + 'operator to report the issue.';

        if (followingReferral) msg = msg + ' In the meantime, uncheck'
          + ' the "Follow referral to registrar\'s RDAP record" checkbox'
          + ' and try again.';

        handleError(msg);
      }
    };

    xhr.send();
  }
}

function handleError(error) {
  var div = document.getElementById('output-div');
  div.innerHTML = '';
  div.appendChild(createErrorNode(error));
}

function createErrorNode(error) {
  el = document.createElement('p');
  el.classList.add('error', 'alert', 'alert-warning');
  el.appendChild(document.createTextNode(error));

  return el;
}

// callback executed when a response is received
function handleResponse(xhr, followReferral=false, followingReferral=false) {
  thawUI();

  lastQueriedURL = xhr.responseURL;

  if (404 == xhr.status) {
    handleError('This object does not exist.');

  } else if (200 != xhr.status) {
    handleError(xhr.status + ' error: ' + xhr.statusText);

  } else {
    if (followReferral && xhr.response.links) {
      for (var i = 0 ; i < xhr.response.links.length ; i++) {
        var l = xhr.response.links[i];

        if ('related' == l.rel && 'application/rdap+json' == l.type && l.href.match(/^(https?:|)\/\//i)) {
          sendQuery(l.href, false, true);
          return;

        }
      }
    }

    try {
      var div = document.getElementById('output-div');
      div.innerHTML = '';
      div.appendChild(processObject(xhr.response, true, followReferral, followingReferral));

      var url = document.createElement('a');
      url.href = window.location.href;
      url.search = '?type=' + escape(document.getElementById('type').value) +
                    '&object=' + escape(document.getElementById('object').value) +
      (document.getElementById('follow-referral').checked ? '&follow-referral=1' : '');

      window.history.pushState(null, window.title, url.href);

    } catch (e) {
      handleError('Exception: "' + e.message + '" on line ' + e.lineNumber);

    }
  }
}

// process an RDAP object. Argument is a JSON object, return
// value is an element that can be inserted into the page
function processObject(object, toplevel, followReferral=true, followingReferral=false) {
  if (!object) {
    console.log(object);
    return false;
  }

  var dl = document.createElement('dl');

  switch (object.objectClassName) {
    case 'domain':
      processDomain(object, dl, toplevel);
      break;

    case 'nameserver':
      processNameserver(object, dl, toplevel);
      break;

    case 'entity':
      processEntity(object, dl, toplevel);
      break;

    case 'autnum':
      processAutnum(object, dl, toplevel);
      break;

    case 'ip network':
      processIp(object, dl, toplevel);
      break;

    default:
      if (object.hasOwnProperty("errorCode")) {
        return createErrorNode(object.errorCode + ' error: ' + object.title);

      } else {
        processUnknown(object, dl, toplevel);

      }
  }

  var card = document.createElement('div');
  card.classList.add('card');

  var titleText = '';
  if (object.hasOwnProperty("unicodeName")) {
    titleText = object.unicodeName.toUpperCase();

  } else if (object.hasOwnProperty("ldhName")) {
    titleText = object.ldhName.toUpperCase();

  } else if (object.hasOwnProperty("handle")) {
    titleText = object.handle.toUpperCase();

  }

  if (object.hasOwnProperty("handle") && object.handle != titleText) titleText += ' (' + object.handle + ')';

  if (titleText.length > 0) {
    titleText = cardTitles[object.objectClassName] + ' ' + titleText;

  } else if (!toplevel) {
    titleText = cardTitles[object.objectClassName];

  } else {
    titleText = 'Response (unknown object type)';

  }

  var title = document.createElement('div');
  title.classList.add('card-header', 'font-weight-bold');
  title.appendChild(document.createTextNode(titleText));
  card.appendChild(title);

  if (toplevel) {
    const vbutton = document.createElement('button');
    vbutton.classList.add('btn', 'btn-link', 'btn-sm');
    vbutton.appendChild(document.createTextNode('Validate this record'));

    vbutton.onclick = function() {
      const type    = document.getElementById('type');
      const typeval = type.options[type.selectedIndex].value;

      const url = 'https://validator.rdap.org/?' +
                  'url=' + escape(lastQueriedURL) +
                  '&response-type=' + escape('ip' === typeval ? 'ip network' : typeval);

      window.open(url);
    };

    // 160 = U+00A0 NO-BREAK SPACE
    title.appendChild(document.createTextNode(String.fromCharCode(160)));

    title.appendChild(vbutton);
  }

  var body = document.createElement('div');
  body.classList.add('card-body');

  body.appendChild(dl);

  card.appendChild(body);
  return card;
}

// simplify the process of adding a name => value to a definition list
function addProperty(dl, name, value) {

  var dt = document.createElement('dt');
  dt.classList.add('rdap-property-name');
  dt.appendChild(document.createTextNode(name));
  dl.appendChild(dt);

  var dd = document.createElement('dd');
  dd.classList.add('rdap-property-value');
  if (value instanceof Node) {
    dd.appendChild(value);

  } else {
    dd.appendChild(document.createTextNode(String(value)));

  }
  dl.appendChild(dd);
}

// called by the individual object processors, since all RDAP objects have a similar set of
// properties. the first argument is the RDAP object and the second is the <dl> element
// being used to display that object.
function processCommonObjectProperties(object, dl) {
  if (object.hasOwnProperty("status")) processStatus(object.status, dl);
  if (object.hasOwnProperty("events")) processEvents(object.events, dl);
  if (object.hasOwnProperty("entities")) processEntities(object.entities, dl);
  if (object.hasOwnProperty("remarks")) processRemarks(object.remarks, dl);
  if (object.hasOwnProperty("notices")) processNotices(object.notices, dl);
  if (object.hasOwnProperty("links")) processLinks(object.links, dl);
  if (object.hasOwnProperty("lang")) addProperty(dl, 'Language:', object.lang);
  if (object.hasOwnProperty("port43")) addProperty(dl, 'Whois Server:', object.port43);
  if (object.hasOwnProperty("rdapConformance")) processrdapConformance(object.rdapConformance, dl);

  var div = document.createElement('div');
  div.id = 'element-' + ++elementCounter;

  var button = document.createElement('button');
  button.classList.add('btn', 'btn-secondary');
  button.appendChild(document.createTextNode('Show'));
  button.onclick = new Function('showRawData("' + div.id + '");return false');
  div.appendChild(button);

  var pre = document.createElement('pre');
  pre.style = 'display:none;visibility:hidden';
  pre.appendChild(document.createTextNode(JSON.stringify(object, null, 2)));
  div.appendChild(pre);

  addProperty(dl, 'Raw Data:', div);
}

// call back for "Show Raw Data" button
function showRawData(id) {
  var div = document.getElementById(id);
  div.childNodes[0].style = 'display:none;visibility:hidden';
  div.childNodes[1].style = 'display:block;visibility:visible';
}

// convert an array into a bulleted list
function createList(list) {
  var ul = document.createElement('ul');

  for (var i = 0 ; i < list.length ; i++) {
    var li = document.createElement('li');
    if (list[i] instanceof Node) {
      li.appendChild(list[i]);

    } else {
      li.appendChild(document.createTextNode(list[i]));

    }
    ul.appendChild(li);
  }

  return ul;
}

// add the RDAP conformance of the response
function processrdapConformance(rdapConformance, dl) {
  addProperty(dl, 'Conformance:', createList(rdapConformance));
}

// add the object's status codes
function processStatus(status, dl) {
  var s = new Array;
  for (var i = 0 ; i < status.length ; i++) {
    var span = document.createElement('span');
    span.classList.add('rdap-status-code');
    span.appendChild(document.createTextNode(status[i]));
    span.setAttribute("title", rdapStatusInfo[status[i]]);
    s.push(span);
  }
  addProperty(dl, 'Status:', createList(s));
}

// add the object's events
function processEvents(events, dl) {
  var sdl = document.createElement('dl');

  for (var i = 0 ; i < events.length ; i++) {
    var span1 = document.createElement('span');
    span1.appendChild(document.createTextNode(new Date(events[i].eventDate).toLocaleString()));
    span1.classList.add('rdap-event-time');
    span1.setAttribute('title', events[i].eventDate);

    var span2 = document.createElement('span');
    span2.appendChild(span1);

    if (events[i].eventActor) {
      span2.appendChild(document.createTextNode(' (by ' + events[i].eventActor + ')'));
    }
    addProperty(sdl, events[i].eventAction + ':', span2);
  }

  addProperty(dl, 'Events:', sdl);
}

// add the object's links
function processLinks(links, dl) {
  var ul = document.createElement('ul');

  for (var i = 0 ; i < links.length ; i++) {
    li = document.createElement('li');

    var title = (links[i].title ? links[i].title : links[i].href);

    var link;
    if (links[i].hasOwnProperty("type") && 0 == links[i].type.indexOf('application/rdap+json')) {
      link = createRDAPLink(links[i].href, title);

    } else {
      link = document.createElement('a');
      link.rel = 'noopener';
      link.title = link.href = links[i].href;
      link.target = '_new';
      link.appendChild(document.createTextNode(title));

    }

    li.appendChild(link);

    if (links[i].hasOwnProperty("rel")) li.appendChild(document.createTextNode(' (' + links[i].rel + ')'));

    ul.appendChild(li);
  }

  addProperty(dl, 'Links:', ul);
}

// add the object's entities
function processEntities(entities, dl) {
  var div = document.createElement('div');

  for (var i = 0 ; i < entities.length ; i++) div.appendChild(processObject(entities[i]));

  addProperty(dl, 'Entities:', div);
}

// add the object's remarks
function processRemarks(remarks, dl) {
  addProperty(dl, 'Remarks:', processRemarksOrNotices(remarks));

}

// add the responses's notices
function processNotices(notices, dl) {
  addProperty(dl, 'Notices:', processRemarksOrNotices(notices));
}

// command handler for remarks and notices
function processRemarksOrNotices(things) {
  var div = document.createElement('div');

  for (var i = 0 ; i < things.length ; i++) {
    var section = document.createElement('section');
    section.classList.add('card');
    div.appendChild(section);

    var title = document.createElement('header');
    title.classList.add('card-header', 'font-weight-bold');
    title.appendChild(document.createTextNode(things[i].title));
    section.appendChild(title);

    var body = document.createElement('div');
    body.classList.add('card-body');
    section.appendChild(body);

    if (things[i].hasOwnProperty("description")) for (var j = 0 ; j < things[i].description.length ; j++) {
      var p = document.createElement('p');
      p.innerHTML = convertURLsToLinks(things[i].description[j]);
      body.appendChild(p);
    }

    if (things[i].hasOwnProperty("links")) {
      var ldl = document.createElement('dl');
      processLinks(things[i].links, ldl);
      body.appendChild(ldl);
    }
  }

  return div;
}

// naively match URLs in plain text and convert to links
function convertURLsToLinks(str) {
  return str.replace(
    /(https?:\/\/[^\s]+[^\.])/g,
    '<a href="$1" target="_new" rel="noopener">$1</a>'
  );
}

// process a domain
function processDomain(object, dl, toplevel=false) {

  if (toplevel) document.title = 'Domain ' + (object.unicodeName ? object.unicodeName : object.ldhName).toUpperCase() + ' - RDAP Lookup';

  if (object.hasOwnProperty("unicodeName")) {
    addProperty(dl, 'Name:', object.unicodeName);
    addProperty(dl, 'ASCII Name:', object.ldhName);

  } else {
    addProperty(dl, 'Name:', object.ldhName);

  }

  if (object.hasOwnProperty("handle")) addProperty(dl, 'Handle:', object.handle);

  // process events, status and entities here, then set them to null so
  // processCommonObjectProperties() doesn't process them again. this
  // makes the output look more like a traditional whois record:
  if (object.hasOwnProperty("events"))    processEvents(object.events, dl);
  if (object.hasOwnProperty("status"))    processStatus(object.status, dl);
  if (object.hasOwnProperty("entities"))  processEntities(object.entities, dl);

  delete object.events;
  delete object.status;
  delete object.entities;

  if (object.hasOwnProperty("nameservers")) {
    var div = document.createElement('div');

    for (var i = 0 ; i < object.nameservers.length ; i++) div.appendChild(processObject(object.nameservers[i]));

    addProperty(dl, 'Nameservers:', div);
  }

  if (!object.hasOwnProperty("secureDNS")) {
    addProperty(dl, 'DNSSEC:', "Insecure");

  } else {
    addProperty(dl, 'DNSSEC:', processDNSSEC(object));

  }

  processCommonObjectProperties(object, dl);
}

function processDNSSEC(domain) {
  var dl = document.createElement('dl');

  if (domain.secureDNS.hasOwnProperty("zoneSigned")) {
    addProperty(dl, 'Parent zone signed:', domain.secureDNS.zoneSigned ? 'Yes' : 'No');
  }

  if (domain.secureDNS.hasOwnProperty("delegationSigned")) {
    addProperty(dl, 'Delegation signed:', domain.secureDNS.delegationSigned ? 'Yes' : 'No');
  }

  if (domain.secureDNS.hasOwnProperty("maxSigLife")) {
    addProperty(dl, 'Signature Lifetime:', domain.secureDNS.maxSigLife + ' second(s)');
  }

  if (domain.secureDNS.hasOwnProperty("dsData")) {
    var ul = document.createElement('ul');

    for (var i = 0 ; i < domain.secureDNS.dsData.length ; i++) {
      var ds = domain.secureDNS.dsData[i];

      ul.appendChild(document.createElement('li'))
        .appendChild(document.createElement('code'))
        .appendChild(document.createTextNode([domain.ldhName+".", "IN", "DS", ds.keyTag, ds.algorithm, ds.digestType, ds.digest].join(" ")));
    }

    addProperty(dl, 'DS Record(s):', ul);
  }

  if (domain.secureDNS.hasOwnProperty("keyData")) {
    var div = document.createElement('div');

    for (var i = 0 ; i < domain.secureDNS.keyData.length ; i++) {
      var dnsKey = domain.secureDNS.keyData[i];

      var table = div.appendChild(document.createElement('table'));
      var tr = table.appendChild(document.createElement('tr'));

      var cells = [
        domain.ldhName + ".",
        "\u00A0",
        "IN",
        "\u00A0",
        "DNSKEY",
        "\u00A0",
        dnsKey.flags,
        "\u00A0",
        dnsKey.protocol,
        "\u00A0",
        dnsKey.algorithm,
        "\u00A0",
        dnsKey.publicKey.match(/./g).join("\u200B")
      ];

      for (var i = 0 ; i < cells.length ; i++) {
        var td = tr.appendChild(document.createElement('td'));
        td.setAttribute('style', 'vertical-align:top;word-wrap:break-word');
        var code = td.appendChild(document.createElement('code'));
        code.setAttribute('white-space:nowrap');
        code.appendChild(document.createTextNode(cells[i]));
      }
    }

    addProperty(dl, 'DNSKey Record(s):', div);
  }

  return dl;
}

// process a nameserver
function processNameserver(object, dl, toplevel=false) {

  if (toplevel) document.title = 'Nameserver ' + object.ldhName + ' - RDAP Lookup';

  addProperty(dl, 'Host Name:', object.ldhName);
  if (object.hasOwnProperty("unicodeName")) addProperty(dl, 'Internationalised Domain Name:', object.unicodeName);
  if (object.hasOwnProperty("handle")) addProperty(dl, 'Handle:', object.handle);

  if (object.hasOwnProperty("ipAddresses")) {
    if (object.ipAddresses.hasOwnProperty("v4")) {
      for (var i = 0 ; i < object.ipAddresses.v4.length ; i++) {
        addProperty(dl, 'IP Address:', createRDAPLink('https://rdap.org/ip/' + object.ipAddresses.v4[i], object.ipAddresses.v4[i]));
      }
    }

    if (object.ipAddresses.hasOwnProperty("v6")) {
      for (var i = 0 ; i < object.ipAddresses.v6.length ; i++) {
        addProperty(dl, 'IP Address:', createRDAPLink('https://rdap.org/ip/' + object.ipAddresses.v6[i], object.ipAddresses.v6[i]));
      }
    }
  }

  processCommonObjectProperties(object, dl);
}

// process an entity
function processEntity(object, dl, toplevel=false) {

  if (toplevel) document.title = 'Entity ' + object.handle + ' - RDAP Lookup';

  if (object.hasOwnProperty("handle")) addProperty(dl, 'Handle:', object.handle);

  if (object.hasOwnProperty("publicIds")) {
    for (var i = 0 ; i < object.publicIds.length ; i++) addProperty(dl, object.publicIds[i].type + ':', object.publicIds[i].identifier);
  }

  if (object.hasOwnProperty("roles")) addProperty(dl, 'Roles:', createList(object.roles));

  if (object.hasOwnProperty("jscard")) {
    addProperty(dl, 'Contact Information:', processJSCard(object.jscard));

  } else if (object.hasOwnProperty("jscard_0")) {
    addProperty(dl, 'Contact Information:', processJSCard(object.jscard_0));

  } else if (object.hasOwnProperty("vcardArray") && object.vcardArray[1]) {
    addProperty(dl, 'Contact Information:', processVCardArray(object.vcardArray[1]));
  }

  processCommonObjectProperties(object, dl);
}

// process an entity's vCard
function processVCardArray(vcard) {
  var vdl = document.createElement('dl');

  for (var i = 0 ; i < vcard.length ; i++) {
    var node = vcard[i];

    var type = node[0].toLowerCase();
    var value = node[3];

    if ('version' == type) {
      continue;

    } else if ('fn' == type) {
      type = 'Name';

    } else if ('n' == type) {
      continue;

    } else if ('org' == type) {
      type = 'Organization';

    } else if ('tel' == type) {
      type = 'Phone';

      if (node[1].type) for (var j = 0 ; j < node[1].type ; j++) if ('fax' == node[1].type[j]) {
        type = 'Fax';
        break;
      }

      var link = document.createElement('a');
      link.href = (0 == value.indexOf('tel:') ? '' : 'tel:') + value;
      link.appendChild(document.createTextNode(value));

      value = link;

    } else if ('adr' == type) {
      type = 'Address';

      if (node[1].hasOwnProperty("label")) {
        var div = document.createElement('div');
        strings = node[1].label.split("\n");
        for (var j = 0 ; j < strings.length ; j++) {
          div.appendChild(document.createTextNode(strings[j]));
          if (j < strings.length - 1) div.appendChild(document.createElement('br'));
        }

        if (node[1].hasOwnProperty("cc")) {
            div.appendChild(document.createElement('br'));
            div.appendChild(document.createTextNode(node[1].cc));
        }

        value = div;

      } else if (value) {
        var div = document.createElement('div');

        for (var j = 0 ; j < value.length ; j++) {
          if (value[j] && value[j].length > 0) {
            div.appendChild(document.createTextNode(value[j]));
            div.appendChild(document.createElement('br'));
          }
        }

        if (node[1].hasOwnProperty("cc")) {
            div.appendChild(document.createTextNode(node[1].cc));
        }

        value = div;
      }

    } else if ('email' == type) {
      type = 'Email';

      var link = document.createElement('a');
      link.href = 'mailto:' + value;
      link.appendChild(document.createTextNode(value));

      value = link;

    } else if ('contact-uri' == type) {
      type = 'Contact URL';

      var link = document.createElement('a');
      link.href = value;
      link.appendChild(document.createTextNode(value));

      value = link;
    }

    if (value) addProperty(vdl, type + ':', value);
  }

  addProperty(vdl, 'Contact format:', 'jCard');

  return vdl;
}

function processJSCard(jscard) {
  var vdl = document.createElement('dl');

  if (jscard.hasOwnProperty("fullName")) addProperty(vdl, 'Name:', jscard.fullName);

  if (jscard.hasOwnProperty("organizations")) {
    for (const k in jscard.organizations) {
      addProperty(vdl, 'Organization:', jscard.organizations[k].name);
    }
  }

  if (jscard.hasOwnProperty("addresses")) {
    for (const k in jscard.addresses) {
      addProperty(vdl, 'Address:', processJSCardAddress(jscard.addresses[k]));
    }
  }

  if (jscard.hasOwnProperty("emails")) {
    for (const k in jscard.emails) {
      var link = document.createElement('a');
      link.href = 'mailto:' + jscard.emails[k].email;
      link.appendChild(document.createTextNode(jscard.emails[k].email));

      addProperty(vdl, 'Email Address:', link);
    }
  }

  if (jscard.hasOwnProperty("phones")) {
    for (const k in jscard.phones) {
      var link = document.createElement('a');
      link.href = jscard.phones[k].phone;
      link.appendChild(document.createTextNode(jscard.phones[k].phone));

      addProperty(vdl, (jscard.phones[k].features.fax ? 'Fax:' : 'Phone:'), link);
    }
  }

  addProperty(vdl, 'Contact format:', 'JSContact');

  return vdl;
}

function processJSCardAddress(address) {
  var dl = document.createElement('dl');
  for (k in address) {
    v = address[k];
    if ('street' == k) {
      var addr = document.createElement('span');
      for (var i = 0 ; i < v.length ; i++) {
        if (i > 1) addr.appendChild(document.createElement('br'));
        addr.appendChild(document.createTextNode(v[i]));
      }
      addProperty(dl, 'Street:', addr);

    } else if ('locality' == k) {
      addProperty(dl, 'City:', v);

    } else if ('region' == k) {
      addProperty(dl, 'State/Province:', v);

    } else if ('postcode' == k) {
      addProperty(dl, 'Postal Code:', v);

    } else if ('countryCode' == k) {
      addProperty(dl, 'Country:', v);

    }
  }
  return dl;
}

// process an AS number
function processAutnum(object, dl, toplevel=false) {

  if (toplevel) document.title = 'AS Number ' + object.handle + ' - RDAP Lookup';

  if (object.hasOwnProperty("name")) addProperty(dl, 'Network Name:', object.name);
  if (object.hasOwnProperty("type")) addProperty(dl, 'Network Type:', object.type);

  processCommonObjectProperties(object, dl);
}

// process an IP or IP block
function processIp(object, dl, toplevel=false) {

  if (toplevel) document.title = 'IP Network ' + object.handle + ' - RDAP Lookup';

  if (object.hasOwnProperty("ipVersion")) addProperty(dl, 'IP Version:', object.ipVersion);
  if (object.hasOwnProperty("startAddress") && object.hasOwnProperty("endAddress")) addProperty(dl, 'Address Range:', object.startAddress + ' - ' + object.endAddress);
  if (object.hasOwnProperty("name")) addProperty(dl, 'Network Name:', object.name);
  if (object.hasOwnProperty("type")) addProperty(dl, 'Network Type:', object.type);
  if (object.hasOwnProperty("country")) addProperty(dl, 'Country:', object.country);
  if (object.hasOwnProperty("parentHandle")) addProperty(dl, 'Parent Network:', object.parentHandle);
  if (object.hasOwnProperty("cidr0_cidrs")) addProperty(dl, 'CIDR Prefix(es):', processCIDRs(object.cidr0_cidrs));

  processCommonObjectProperties(object, dl);
}

function processCIDRs(cidrs) {
  var list = document.createElement('ul');
  for (i = 0 ; i < cidrs.length ; i++) {
    var cidr = (cidrs[i].v6prefix ? cidrs[i].v6prefix : cidrs[i].v4prefix) + '/' + cidrs[i].length;
    list.appendChild(document.createElement('li')).appendChild(createRDAPLink('https://rdap.org/ip/' + cidr, cidr));
  }
  return list;
}

function processUnknown(object, dl, toplevel=false) {
  processCommonObjectProperties(object, dl);
}

// given an object, return the "self" URL (if any)
function getSelfLink(object) {
  if (object.hasOwnProperty("links")) for (var i = 0 ; i < object.links.length ; i++) if ('self' == object.links[i].rel) return object.links[i].href;

  return null;
}

// create an RDAP link: a link pointing to an RDAP URL
// that when clicked, causes an RDAP query to be made
function createRDAPLink(url, title) {
  var link = document.createElement('a');

  link.href = 'javascript:void(0)';
  link.title = url;
  link.onclick = new Function("runQuery('" + url + "')");

  link.appendChild(document.createTextNode(title));

  return link;
}

// guess the type from the input value
function guessType(object) {
  var patterns = [
    [ /^(asn?|)\d+$/i, "autnum" ],
    [ /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/?\d*$/, "ip" ],
    [ /^[0-9a-f:]{2,}\/?\d*$/i, "ip" ],
    [ /^https?:/i, "url" ],
    [ /^{/, "json" ],
    [ /^(xn--[a-z0-9]|[a-z][a-z0-9\-]*[a-z])$/i, "tld" ],
    [ /./, "domain" ],
  ];
  for (var i = 0 ; i < patterns.length ; i++) {
    if (patterns[i][0].test(object)) {
      setType(patterns[i][1]);
      break;
    }
  }
}

// set the type of the object to be queried
function setType(type) {
 var select = document.getElementById('type');
 for (var i = 0 ; i < select.options.length ; i++) if (select.options.item(i).value == type) {
    select.selectedIndex = i;
    break;
  }
}

// check params of query string - called when page loads and when the back/forward buttons are used
function checkParams() {
  var params = new URLSearchParams(window.location.search);

  if (params.has('type')) {
    setType(params.get('type'));

  } else if (params.has('object')) {
    guessType(params.get('object'));

  }

  if (params.has('follow-referral') && 1 == params.get('follow-referral')) {
    document.getElementById('follow-referral').checked = true;
  }

  if (params.has('object')) {
    document.getElementById('object').value = params.get('object');
    doQuery();
  }
}

function loadRegistries(callback) {
  showSpinner('Loading bootstrap registries...');
  for (url in registryURLs) {
    let xhr = createXHR(url);

    xhr.ontimeout = function() { handleError('There was an error retrieving one or more IANA registries. Please try again later.'); };

    xhr.onload = function() { handleRegistryResponse(xhr); };

    xhr.send();
  }
}

function handleRegistryResponse(xhr) {
  if (4 == xhr.readyState) {
    if (200 != xhr.status) {
      handleError(xhr.status + ' error retrieving IANA registry for ' + registryURLs[xhr.responseURL] + 'objects: ' + xhr.statusText);

    } else {
      registryData[registryURLs[xhr.responseURL]] = xhr.response.services;

    }

    if (++loadedRegistries == Object.keys(registryURLs).length) {
      registryData.ip = registryData.ip4.concat(registryData.ip6);
      activateUI();
    }
  }
}

function freezeUI() {
  document.getElementById('type').disabled = true;
  document.getElementById('object').disabled = true;
  document.getElementById('button').disabled = true;

  showSpinner('Sending request...');
}

function thawUI() {
  document.getElementById('type').disabled = false;
  document.getElementById('object').disabled = false;
  document.getElementById('button').disabled = false;
}

function activateUI() {
  document.getElementById('output-div').innerHTML = '';
  document.getElementById('object').focus();
  document.getElementById('button').disabled = false;

  checkParams();

  window.onpopstate = checkParams;
}
