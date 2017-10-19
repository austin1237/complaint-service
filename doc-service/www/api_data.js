define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "_app_docs_main_js",
    "groupTitle": "_app_docs_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/v1/companies/totals",
    "title": "GET companies totals",
    "name": "GetCompanyTotals",
    "description": "<p>request total number of complaints per company</p>",
    "group": "companies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productId",
            "description": "<p>id of the product that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "companyId",
            "description": "<p>id of the company that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of the issue that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stateId",
            "description": "<p>id of the state that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderBy",
            "description": "<p>valid sorting options are total for ascending order or -total for descending order</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"companyId\": 1,\n  \"name\": \"Wallace Corporation\",\n  \"total\": 1712\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routers/companiesRouter.js",
    "groupTitle": "companies"
  },
  {
    "type": "get",
    "url": "/v1/companies",
    "title": "GET companies",
    "description": "<p>request information on companies</p>",
    "name": "GetProducts",
    "group": "companies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "companyId",
            "description": "<p>id of the company</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the company</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"companyId\": 1,\n  \"name\": \"Wallace Corporation\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routers/companiesRouter.js",
    "groupTitle": "companies"
  },
  {
    "type": "get",
    "url": "/v1/complaints",
    "title": "GET complaints",
    "description": "<p>request information on complaints</p>",
    "name": "GetProducts",
    "group": "complaints",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "complaintId",
            "description": "<p>id of the complaint</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "companyId",
            "description": "<p>id the company that has had a complaint filed against them</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productId",
            "description": "<p>id of the product who has had a consumer complain for</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of the type of issue the complaint has been made for.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stateId",
            "description": "<p>id of the state where the complaint was made</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "timely",
            "description": "<p>whether or not the company response was timely</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "disputed",
            "description": "<p>whether or not the company disputed the complaint</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"complaintId\": 1,\n  \"companyId\": 1,\n  \"productId\": 1,\n  \"issueId\": 1,\n  \"stateId\": 28,\n  \"dateSent\": \"2014-03-17T00:00:00.000Z\",\n  \"narrative\": \"\",\n  \"publicResponse\": \"\",\n  \"timely\": true,\n  \"disputed\": false\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routers/complaintRouter.js",
    "groupTitle": "complaints"
  },
  {
    "type": "get",
    "url": "/health",
    "title": "GET health",
    "name": "HealthCheck",
    "group": "health",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routers/healthRouter.js",
    "groupTitle": "health"
  },
  {
    "type": "get",
    "url": "/v1/products/totals",
    "title": "GET product totals",
    "name": "GetProductTotals",
    "description": "<p>request total number of complaints per product</p>",
    "group": "products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productId",
            "description": "<p>id of the product that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "companyId",
            "description": "<p>id of the company that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of the issue that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stateId",
            "description": "<p>id of the state that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderBy",
            "description": "<p>valid sorting options are total for ascending order or -total for descending order</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"productId\": 1,\n   \"name\": \"Mortgage\",\n  \"total\": 1712\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routers/productsRouter.js",
    "groupTitle": "products"
  },
  {
    "type": "get",
    "url": "/v1/products",
    "title": "GET products",
    "description": "<p>request information on products</p>",
    "name": "GetProducts",
    "group": "products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productId",
            "description": "<p>id of the product</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"productId\": 1,\n  \"name\": \"Mortgage\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routers/productsRouter.js",
    "groupTitle": "products"
  },
  {
    "type": "get",
    "url": "/v1/states/totals",
    "title": "GET state totals",
    "name": "GetCompanyTotals",
    "description": "<p>request total number of complaints per state</p>",
    "group": "states",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "productId",
            "description": "<p>id of the product that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "companyId",
            "description": "<p>id of the company that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "issueId",
            "description": "<p>id of the issue that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stateId",
            "description": "<p>id of the state that filters the complaints totals</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderBy",
            "description": "<p>valid sorting options are total for ascending order or -total for descending order</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"stateId\": 1,\n  \"name\": \"california\",\n  \"total\": 1712\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routers/statesRouter.js",
    "groupTitle": "states"
  },
  {
    "type": "get",
    "url": "/v1/states",
    "title": "GET states",
    "description": "<p>request information on states</p>",
    "name": "GetState",
    "group": "states",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stateId",
            "description": "<p>id of the state</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the state</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "abbreviation",
            "description": "<p>two letter abbreviation of the state</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"stateId\": 1,\n  \"name\": \"California\",\n  \"abbreviation\": \"CA\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routers/statesRouter.js",
    "groupTitle": "states"
  },
  {
    "type": "get",
    "url": "/v1/states/growth",
    "title": "GET states growth",
    "description": "<p>request information on states</p>",
    "name": "GetStateGrowth",
    "group": "states",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "stateId",
            "description": "<p>id of the state</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "startYear",
            "description": "<p>the variable in populationDiff = (endYear - startYear)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "endYear",
            "description": "<p>the variable in populationDiff = (endYear - startYear)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderBy",
            "description": "<p>valid sorting options are populationDiff/growthPercentage for ascending order or -populationDiff/-growthPercentage for descending order</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"stateId\": 1,\n  \"populationDiff\": 2000,\n  \"growthPercentage\": .9832\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routers/statesRouter.js",
    "groupTitle": "states"
  }
] });
