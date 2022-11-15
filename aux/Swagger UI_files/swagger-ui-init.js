
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
    "openapi": "3.0.3",
    "info": {
      "title": "Produtos Eletronicos",
      "description": "API Rest de e-commerce (produtos eletronicos)",
      "version": "0.0.1"
    },
    "servers": [
      {
        "url": "http://localhost:3000"
      }
    ],
    "paths": {
      "/cliente": {
        "get": {
          "description": "lista de itens em um Cliente",
          "responses": {
            "200": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Clientes"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "descrption": "Cadastra novo Cliente",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Clientes"
                }
              }
            }
          }
        }
      },
      "/cliente/{id}": {
        "description": "Exibe Cliente ID",
        "get": {
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "200": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#components/schemas/Clientes"
                  }
                }
              }
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        },
        "put": {
          "description": "Atualisa um Cliente",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "204": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Cliente"
                  }
                }
              }
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        },
        "delete": {
          "description": "Apaga um Cliente",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "204": {
              "description": "Sucesso"
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        }
      },
      "/enderecos": {
        "get": {
          "description": "lista de itens em um Endereco",
          "responses": {
            "200": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Enderecos"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "descrption": "Cadastra novo Endereco",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Enderecos"
                }
              }
            }
          }
        }
      },
      "/enderecos/{id}": {
        "description": "Exibe Endereco ID",
        "get": {
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "200": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#components/schemas/Enderecos"
                  }
                }
              }
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        },
        "put": {
          "description": "Atualisa um Endereco",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "204": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Enderecos"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        },
        "delete": {
          "description": "Apaga um Endereco",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "204": {
              "description": "Sucesso"
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        }
      },
      "/carrinhos": {
        "get": {
          "description": "lista de itens em um Carrinho",
          "responses": {
            "200": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Carrinhos"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "descrption": "Cadastra novo Carrinho",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Carrinhos"
                  }
                }
              }
            }
          }
        }
      },
      "/carrinhos/{id}": {
        "get": {
          "description": "Exibe Carrinho ID",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "200": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Carrinhos"
                  }
                }
              }
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        },
        "put": {
          "description": "Atualisa um pedido",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "204": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Carrinhos"
                    }
                  }
                }
              }
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        },
        "delete": {
          "description": "Apaga um Carrinhos",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "204": {
              "description": "Sucesso"
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        }
      },
      "/produtos": {
        "get": {
          "description": "lista de itens em um pedido",
          "responses": {
            "200": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pedidos"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "descrption": "Cadastra novo pedido",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Pedidos"
                }
              }
            }
          }
        }
      },
      "/produtos/{id}": {
        "description": "Exibe Pedido ID",
        "get": {
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "200": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#components/schemas/Pedidos"
                  }
                }
              }
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        },
        "put": {
          "description": "Atualisa um pedido",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "204": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Pedidos"
                  }
                }
              }
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        },
        "delete": {
          "description": "Apaga um pedido",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "204": {
              "description": "Sucesso"
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        }
      },
      "/pedidos": {
        "get": {
          "description": "lista de itens em um pedido",
          "responses": {
            "200": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Pedidos"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "descrption": "Cadastra novo pedido",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Pedidos"
                }
              }
            }
          }
        }
      },
      "/pedidos/{id}": {
        "get": {
          "description": "Exibe Pedido ID",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "200": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#components/schemas/Pedidos"
                  }
                }
              }
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        },
        "put": {
          "description": "Atualisa um pedido",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "204": {
              "description": "Sucesso",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Pedidos"
                  }
                }
              }
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        },
        "delete": {
          "description": "Apaga um pedido",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true
            }
          ],
          "responses": {
            "204": {
              "description": "Sucesso"
            },
            "404": {
              "description": "Não Encontrado"
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "Clientes": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": 1
            },
            "nome": {
              "type": "string",
              "example": "Casa"
            },
            "fone": {
              "type": "string",
              "example": "9999-9999"
            },
            "cpf": {
              "type": "string",
              "example": "222.222.2222-22"
            }
          }
        },
        "Enderecos": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": 1
            },
            "nome": {
              "type": "string",
              "example": "Casa"
            },
            "cidade": {
              "type": "string",
              "example": "Brasília"
            },
            "bairro": {
              "type": "string",
              "example": "Asa Sul"
            },
            "logradouro": {
              "type": "string",
              "example": "SQS 402, bl B "
            },
            "numero": {
              "type": "string",
              "example": "103"
            },
            "cep": {
              "type": "string",
              "example": "70330-515"
            },
            "tipo_residencia": {
              "type": "string",
              "example": "A"
            },
            "complento": {
              "type": "string",
              "example": "Avisar antes da entrega"
            }
          }
        },
        "Carrinhos": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": 1
            },
            "cliente_id ": {
              "type": "number",
              "example": 1
            },
            "carrinho_valor": {
              "type": "number",
              "example": 230.55
            },
            "lista_produtos": {
              "type": "object",
              "properties": {
                "produtos_id": {
                  "type": "number",
                  "example": 1
                },
                "produtos_nome": {
                  "type": "string",
                  "example": "memoria ram"
                },
                "produtos_valor": {
                  "type": "number",
                  "example": 150.35
                }
              }
            }
          }
        },
        "Produtos": {},
        "Pedidos": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": 1
            },
            "cliente_id": {
              "type": "number",
              "example": 1
            },
            "cliente_telefone": {
              "type": "string",
              "example": "(99)99999-9999"
            },
            "endereco_id": {
              "type": "number",
              "example": 1
            },
            "carrinho_id": {
              "type": "number",
              "example": 1
            },
            "carrinho_valor": {
              "type": "float",
              "example": 230.55
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

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
