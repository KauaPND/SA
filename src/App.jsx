import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="left-side">
        <div className="logo">LOST PLUSHY</div>
        <div className="description">
          <p>Bem-vindo ao Lost Plushy,</p>
          <p>Onde o macabro encontra o adorável e o sinistro se mistura com o reconfortante.</p>
          <p>Somos uma empresa dedicada a criar pelúcias que desafiam as convenções do mundo do entretenimento infantil.</p>
            <p>Aqui, abraçamos o lado mais sombrio da imaginação, transformando o medo em algo que você pode abraçar.</p>
        </div>
      </div>
      <div className="right-side">
        <form className="login-form">
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Senha</label>
          <input type="password" name="password" required />
          <button type="submit">LOGAR</button>
          <a href="/forgot-password" className="forgot-password">Esqueci minha senha</a>
          <button type="button" className="signup">Sem um login? Cadastre-se!</button>
        </form>
      </div>
    </div>
  );
}

export default App;
