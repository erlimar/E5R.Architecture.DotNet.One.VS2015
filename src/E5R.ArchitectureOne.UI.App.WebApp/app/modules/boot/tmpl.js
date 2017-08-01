define(function (require, exports, module) {
  module.exports = function($templateCache) {
  'use strict';

  $templateCache.put('views/components/menu/main-menu.tmpl',
    "<div class=\"left side-menu\">\r" +
    "\n" +
    "    <div class=\"sidebar-inner slimscrollleft\">\r" +
    "\n" +
    "        <div id=\"sidebar-menu\">\r" +
    "\n" +
    "            <ul>\r" +
    "\n" +
    "                <li ng-repeat=\"menu in $ctrl.menuList\">\r" +
    "\n" +
    "                    <a class=\"waves-effect\" ui-sref=\"{{ menu.rota }}\" >\r" +
    "\n" +
    "                        <i class=\"fa fa-arrow-right\"></i>\r" +
    "\n" +
    "                        <span>{{ menu.titulo }}</span>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"clearfix\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/pages/atividades.tmpl',
    "<!--// Ações\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-12\">\r" +
    "\n" +
    "        <div class=\"btn-group pull-right m-t-15\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default dropdown-toggle waves-effect waves-light\" data-toggle=\"dropdown\" aria-expanded=\"false\">Configuração <span class=\"m-l-5\"><i class=\"fa fa-cog\"></i></span></button>\r" +
    "\n" +
    "            <ul class=\"dropdown-menu drop-menu-right\" role=\"menu\">\r" +
    "\n" +
    "                <li><a href=\"#\">Novo contrato</a></li>\r" +
    "\n" +
    "                <li><a href=\"#\">Andamento</a></li>\r" +
    "\n" +
    "                <li class=\"divider\"></li>\r" +
    "\n" +
    "                <li><a href=\"#\">Cadastro de usuário</a></li>\r" +
    "\n" +
    "                <li><a href=\"#\">Relatórios</a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <h4 class=\"page-title\">Início</h4>\r" +
    "\n" +
    "        <p class=\"text-muted page-title-alt\">Acompanhe o andamento dos contratos</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--// Resumo\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-6 col-lg-3\">\r" +
    "\n" +
    "        <div class=\"widget-bg-color-icon card-box fadeInDown animated\">\r" +
    "\n" +
    "            <div class=\"bg-icon bg-icon-inverse pull-left\">\r" +
    "\n" +
    "                <i class=\"fa fa-dollar text-dark\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"text-right\">\r" +
    "\n" +
    "                <h3 class=\"text-dark\"><b class=\"counter\">31,570</b></h3>\r" +
    "\n" +
    "                <p class=\"text-muted\">Total Revenue</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-md-6 col-lg-3\">\r" +
    "\n" +
    "        <div class=\"widget-bg-color-icon card-box\">\r" +
    "\n" +
    "            <div class=\"bg-icon bg-icon-inverse pull-left\">\r" +
    "\n" +
    "                <i class=\"fa fa-cart-plus text-dark\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"text-right\">\r" +
    "\n" +
    "                <h3 class=\"text-dark\"><b class=\"counter\">280</b></h3>\r" +
    "\n" +
    "                <p class=\"text-muted\">Today's Sales</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-md-6 col-lg-3\">\r" +
    "\n" +
    "        <div class=\"widget-bg-color-icon card-box\">\r" +
    "\n" +
    "            <div class=\"bg-icon bg-icon-inverse pull-left\">\r" +
    "\n" +
    "                <i class=\"fa fa-bar-chart text-dark\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"text-right\">\r" +
    "\n" +
    "                <h3 class=\"text-dark\"><b class=\"counter\">0.16</b>%</h3>\r" +
    "\n" +
    "                <p class=\"text-muted\">Conversion</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-md-6 col-lg-3\">\r" +
    "\n" +
    "        <div class=\"widget-bg-color-icon card-box\">\r" +
    "\n" +
    "            <div class=\"bg-icon bg-icon-inverse pull-left\">\r" +
    "\n" +
    "                <i class=\"fa fa-database text-dark\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"text-right\">\r" +
    "\n" +
    "                <h3 class=\"text-dark\"><b class=\"counter\">64,570</b></h3>\r" +
    "\n" +
    "                <p class=\"text-muted\">Today's Visits</p>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"clearfix\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-12\">\r" +
    "\n" +
    "        <div class=\"card-box\">\r" +
    "\n" +
    "            <h4 class=\"text-dark header-title m-t-0 m-b-30\">Contratos</h4>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <div class=\"table-div\">\r" +
    "\n" +
    "                    <div class=\"tr tr-title\">\r" +
    "\n" +
    "                        <div class=\"td\"></div>\r" +
    "\n" +
    "                        <div class=\"td\">Título contrato</div>\r" +
    "\n" +
    "                        <div class=\"td\">Nome etapa</div>\r" +
    "\n" +
    "                        <div class=\"td\">Usuário</div>\r" +
    "\n" +
    "                        <div class=\"td\">Hora início</div>\r" +
    "\n" +
    "                        <div class=\"td\" width=\"35\"></div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"tr\" ng-repeat=\"i in [1,2,3,4,5,6,7,8,9,10,11,12]\">\r" +
    "\n" +
    "                        <div class=\"td\"><span class=\"fa fa-square text-danger\" ng-class=\"{'text-success' : i <= 2, 'text-primary' : i >= 4}\"></span></div>\r" +
    "\n" +
    "                        <div class=\"td\">Lorem Ipsum é simplesmente</div>\r" +
    "\n" +
    "                        <div class=\"td\">Lorem Ipsum é simplesmente</div>\r" +
    "\n" +
    "                        <div class=\"td\">Lorem Ipsum é simplesmente</div>\r" +
    "\n" +
    "                        <div class=\"td\">Lorem Ipsum é simplesmente uma simulação</div>\r" +
    "\n" +
    "                        <div class=\"td pointer text-right\"><i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i></div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row m-t-20\">\r" +
    "\n" +
    "                <div class=\"col-md-12 text-center\">\r" +
    "\n" +
    "                    <button class=\"btn btn-inverse btn-rounded\">Carregar mais</button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <hr />\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <span class=\"fa fa-square text-success\"></span> Contrato Novo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                <span class=\"fa fa-square text-primary\"></span> Contrato em Andamento &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                <span class=\"fa fa-square text-warning\"></span> Contrato Atrasado &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "                <span class=\"fa fa-square text-danger\"></span> Contrato Parado &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('views/pages/home.tmpl',
    "<h1>Seja bem vindo ao With Control!</h1>"
  );

  };
});
