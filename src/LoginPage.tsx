import React, { useState } from 'react';
import './index.css'; // 桜のアニメーションCSS import

const LoginPage: React.FC = () => {
  //username、password、error：文字列の状態でuseStateを初期化（TypeScriptでジェネリックを使って型を指定）
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  // フォーム送信イベントの型指定：React.FormEventはHTMLFormElementのイベントタイプを安全に処理します
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('ユーザー名とパスワードを入力してください。');
      return;
    }
    setError('');
    alert('ログイン成功！');
  };

  return (
    <div
      style={{
        // 全体背景スタイル
        minHeight: '100vh',
        backgroundColor: '#FFF1F5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <form
        onSubmit={handleLogin} // ログインボタンをクリックした際にhandleLoginを実行
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          width: '100%',
          maxWidth: '360px',
          textAlign: 'center',
          color: '#4a2e35',
        }}
      >
        <h1
          style={{
            // グラデーションロゴテキスト
            fontSize: '1.5rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            background: 'linear-gradient(90deg, #EB6F92, #FFD97D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.05em',
          }}
        >
          YJM ENTERTAINMENT
        </h1>

        <h2
          style={{
            // サブタイトル
            fontSize: '1rem',
            marginBottom: '1.5rem',
            color: '#a85566',
          }}
        >
          Login To Your Account
        </h2>

        {/* ユーザー名入力フィールド（桜アイコンを含む） */}
        <div
          style={{
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #e9a9bb',
            borderRadius: '0.375rem',
            padding: '0.4rem 0.6rem',
            backgroundColor: '#fff',
          }}
        >
          <span
            className="floatUp"
            style={{ marginRight: '0.6rem', fontSize: '1.3rem' }}
          >
            🌸
          </span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            style={{
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              width: '100%',
              background: 'transparent',
              color: '#4a2e35',
            }}
          />
        </div>

        {/* パスワード入力フィールド（鍵アイコンを含む） */}
        <div
          style={{
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #e9a9bb',
            borderRadius: '0.375rem',
            padding: '0.4rem 0.6rem',
            backgroundColor: '#fff',
          }}
        >
          <span
            className="floatUp"
            style={{ marginRight: '0.6rem', fontSize: '1.2rem' }}
          >
            🔒
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              width: '100%',
              background: 'transparent',
              color: '#4a2e35',
            }}
          />
        </div>

        {/* エラーメッセージの表示 */}
        {error && (
          <p
            style={{
              color: '#EB6F92',
              fontSize: '0.9rem',
              marginBottom: '1rem',
            }}
          >
            {error}
          </p>
        )}

        {/* ログインボタン */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.6rem',
            backgroundColor: '#EB6F92',
            color: '#fff',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '1rem',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#d9577c')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#EB6F92')
          }
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
