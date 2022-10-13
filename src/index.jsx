import React from  'react'

export const Home = () =>{
    return( 
        <>
            <div class="topo_menu">
        <div class="container">
              <div class="logo">
                <img src="imagens/logoRas2.png"  width="100%" height="70px" title="Rife.me"></div>
              <div class="menu">
                  <ul>
                      <li>Cadastrar-se</li>
                      <li class="btn_entrar" data-toggle="modal" data-target="#exampleModal">Login</li>
                  </ul>
              </div>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insira o seu E-mail">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
                      </div>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Lembrar</label>
                      </div>
                      <button type="submit" class="btn btn-primary">Entrar</button>
                    </form>
            </div>
          </div>
        </div>
      </div>
    
      <div class="corpo_anuncio">
          <div class="container">
            <h1>Mini Buggy 2018</h1>
            <p>Inserido no dia 21 de Março de 2018</p>

                <div class="row">
                    <div class="col-8 corpo_imagens img-responsive">
                          <img src="imagens/buggy.jpeg" id="troca_imagem">
                    </div>
                    <div class="col-4">
                        <div class="corpo_preco"><h2>R$ 5,00</h2></div>
                        <div class="corpo_anunciante"><p><b>Representante</b></p><p>Jade Oliveira Cordeiro</p><p>(75) 98871-8531</p></div>
                        <div class="share">Redes Sociais</div>
                    </div>
                </div>
                <div class="fundo_miniatura">
                    <div class="img_miniatura" onclick="img01()"><img src="imagens/buggy.jpeg"></div>
                    <div class="img_miniatura" onclick="img02()"><img src="imagens/buggy2.jpeg"></div>
                    <div class="img_miniatura" onclick="img03()"><img src="imagens/buggy3.jpeg"></div>
                </div>
          </div>
      </div>
    
    <div class="descricao">
      <div class="container">
        <div class="linha"></div>
          <h2>Descrição</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="linha"></div>
      </div>
    </div>
    <!-- FIM DESCRIÇÃO -->


    <!-- NÚMEROS-->
    <div class="numeros">
        <div class="container">
          <h2 id="teste">Números</h2>
          <p>Restam <b>17</b> Números</p>
        </div>

        <div class="container">
          <div class="row">
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">01</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">02</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">03</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero reserved">04</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">05</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">06</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">07</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">08</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">09</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">10</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">11</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">12</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">13</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">14</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">15</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">16</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">17</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">18</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">19</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">20</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">21</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">22</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">23</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">24</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">25</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">26</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">27</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">28</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">29</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">30</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">31</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">32</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">33</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">34</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">35</div></div>
              <div class="col-3 col-md-2 col-lg-1"><div class="btn_numero">36</div></div>
          </div>
          <div class="linha"></div>
        </div>

    </div>
    <!-- FIM NÚMEROS -->

    <!-- RECOMENDAÇÕES-->
    <div class="recomenda">
        <div class="container">
          <h2>Recomendações</h2>
            <div class="box_anuncios">

                <div class="row">
                    <div class="col-sm-3">
                      <div class="img_recomenda"></div>
                      <div class="descricao_recomenda">
                        Anúncio #
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="img_recomenda"></div>
                      <div class="descricao_recomenda">
                        Anúncio #
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="img_recomenda"></div>
                      <div class="descricao_recomenda">
                        Anúncio #
                      </div>
                    </div>

                    <div class="col-sm-3">
                      <div class="img_recomenda"></div>
                      <div class="descricao_recomenda">
                        Anúncio #
                      </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- FIM RECOMENDAÇÕES -->



    <!-- F0OTER -->
      <div class="footer">
          <div class="container">
              <p>Desapegue de forma divertida !</p>
              <div class="redes">
                 <div class="row">
                    <div class="col-4">
                        <div class="icon">f</div>
                    </div>
                    <div class="col-4">
                        <div class="icon">f</div>
                    </div>
                    <div class="col-4">
                        <div class="icon">f</div>
                    </div>
                 </div>
              </div>
          </div>
      </div>
        </>
    )
}

