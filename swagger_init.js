
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "Weddinvites REST API",
      "description": "Description"
    },
    "host": "boda-restapi-production.up.railway.app",
    "basePath": "/",
    "schemes": [
      "https"
    ],
    "paths": {
      "/": {
        "get": {
          "description": "",
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/api/eventos": {
        "get": {
          "description": "",
          "responses": {
            "200": {
              "description": "OK"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      },
      "/api/invitados": {
        "get": {
          "description": "",
          "responses": {
            "200": {
              "description": "OK"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      },
      "/api/invitados/{evento}": {
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "evento",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      },
      "/api/invitados/registrar": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "segundoNombre": {
                    "example": "any"
                  },
                  "apellidoMaterno": {
                    "example": "any"
                  },
                  "primerNombrePareja": {
                    "example": "any"
                  },
                  "apellidoPaternoPareja": {
                    "example": "any"
                  },
                  "evento": {
                    "example": "any"
                  },
                  "tipo": {
                    "example": "any"
                  },
                  "primerNombre": {
                    "example": "any"
                  },
                  "apellidoPaterno": {
                    "example": "any"
                  },
                  "pases": {
                    "example": "any"
                  },
                  "telefono": {
                    "example": "any"
                  },
                  "slug": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "500": {
              "description": "Internal Server Error"
            },
            "502": {
              "description": "Bad Gateway"
            }
          }
        }
      },
      "/api/invitados/editar": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "segundoNombre": {
                    "example": "any"
                  },
                  "apellidoMaterno": {
                    "example": "any"
                  },
                  "idAcompanante": {
                    "example": "any"
                  },
                  "primerNombrePareja": {
                    "example": "any"
                  },
                  "apellidoPaternoPareja": {
                    "example": "any"
                  },
                  "idInvitado": {
                    "example": "any"
                  },
                  "evento": {
                    "example": "any"
                  },
                  "tipo": {
                    "example": "any"
                  },
                  "primerNombre": {
                    "example": "any"
                  },
                  "apellidoPaterno": {
                    "example": "any"
                  },
                  "pases": {
                    "example": "any"
                  },
                  "telefono": {
                    "example": "any"
                  },
                  "confirmado": {
                    "example": "any"
                  },
                  "slug": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "500": {
              "description": "Internal Server Error"
            },
            "502": {
              "description": "Bad Gateway"
            }
          }
        }
      },
      "/api/invitados/info/{slug}": {
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "slug",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "404": {
              "description": "Not Found"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      },
      "/api/invitados/invitado/{id}": {
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "404": {
              "description": "Not Found"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      },
      "/api/invitados/confirmar": {
        "put": {
          "description": "",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "500": {
              "description": "Internal Server Error"
            },
            "502": {
              "description": "Bad Gateway"
            }
          }
        }
      },
      "/api/invitados/eliminar": {
        "delete": {
          "description": "",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "500": {
              "description": "Internal Server Error"
            },
            "502": {
              "description": "Bad Gateway"
            }
          }
        }
      },
      "/api/acompanantes/{invitado}": {
        "get": {
          "description": "",
          "parameters": [
            {
              "name": "invitado",
              "in": "path",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            },
            "404": {
              "description": "Not Found"
            },
            "500": {
              "description": "Internal Server Error"
            }
          }
        }
      },
      "/api/acompanantes/registrar": {
        "post": {
          "description": "",
          "parameters": [
            {
              "name": "body",
              "in": "body",
              "schema": {
                "type": "object",
                "properties": {
                  "segundoNombre": {
                    "example": "any"
                  },
                  "apellidoPaterno": {
                    "example": "any"
                  },
                  "apellidoMaterno": {
                    "example": "any"
                  },
                  "primerNombre": {
                    "example": "any"
                  },
                  "invitado": {
                    "example": "any"
                  }
                }
              }
            }
          ],
          "responses": {
            "default": {
              "description": ""
            }
          }
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.preauthorizeApiKey) {
    const key = customOptions.preauthorizeApiKey.authDefinitionKey;
    const value = customOptions.preauthorizeApiKey.apiKeyValue;
    if (!!key && !!value) {
      const pid = setInterval(() => {
        const authorized = ui.preauthorizeApiKey(key, value);
        if(!!authorized) clearInterval(pid);
      }, 500)

    }
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
