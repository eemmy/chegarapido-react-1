let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Development/tea-solutions/chegarapido-react-1
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess=aoO
badd +7 ./src/pages/Home.js
badd +1 ./src/pages/Register.js
badd +671 ./src/pages/MyRequests.js
badd +17 src/pages/MyAddress.js
badd +54 src/App.js
badd +24 html/minha-conta.html
badd +29 src/pages/MyAccount.js
badd +31 html/modals.html
badd +829 html/pagamento.html
badd +625 src/pages/Payment.js
badd +423 src/pages/Wallet.js
badd +24 html/carteira.html
badd +83 src/pages/ForgotPassword.js
badd +58 html/esqueci-minha-senha.html
badd +61 src/contexts/AuthContext.js
badd +29 html/estabelecimentos.html
badd +4 Establishments.js
badd +934 src/pages/Establishments.js
badd +26 html/estabelecimento-aberto.html
badd +1444 src/pages/EstablishmentsOpen.js
badd +850 src/pages/EstablishmentsClose.js
badd +26 html/estabelecimento-fechado.html
badd +40 html/cadastro-entregador.html
badd +368 src/pages/RegisterDeliveryman.js
badd +9 package.json
badd +24 html/cadastro-franqueado.html
badd +1 src/pages/FranchisedRegistration.js
badd +733 src/pages/RegisterFranchised.js
badd +316 src/pages/RegisterEstablishments.js
badd +0 html/cadastro-estabelecimento.html
argglobal
%argdel
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit ./src/pages/Home.js
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1214 - ((25 * winheight(0) + 18) / 36)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1214
normal! 013|
tabnext
edit src/pages/RegisterEstablishments.js
argglobal
balt ./src/pages/Register.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
silent! normal! zE
let &fdl = &fdl
let s:l = 437 - ((18 * winheight(0) + 18) / 36)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 437
normal! 0
tabnext
edit src/App.js
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 54 - ((11 * winheight(0) + 18) / 36)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 54
normal! 020|
tabnext
edit html/cadastro-estabelecimento.html
argglobal
balt html/cadastro-franqueado.html
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 24 - ((17 * winheight(0) + 18) / 36)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 24
normal! 0
tabnext 2
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
