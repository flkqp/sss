import { useState } from 'react';

const ApiDocs = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('cbr');

  const tabs = [
    {
      id: 'cbr',
      title: 'ЦБ РФ (Валюты)',
      content: (
        <div>
          <h3>API Центробанка России</h3>
          <p><strong>Источник:</strong> <a href="https://www.cbr-xml-daily.ru/" target="_blank">cbr-xml-daily.ru</a></p>
          <p><strong>Формат:</strong> JSON</p>
          <p><strong>Бесплатно:</strong> Да, без ключа</p>
          <p><strong>Эндпоинт:</strong> <code>GET https://www.cbr-xml-daily.ru/daily_json.js</code></p>
          <h4>Возвращает:</h4>
          <ul>
            <li><code>Valute.USD.Value</code> — курс доллара</li>
            <li><code>Valute.EUR.Value</code> — курс евро</li>
          </ul>
        </div>
      )
    },
    {
      id: 'coingecko',
      title: 'CoinGecko (Крипта)',
      content: (
        <div>
          <h3>CoinGecko API</h3>
          <p><strong>Документация:</strong> <a href="https://docs.coingecko.com/reference/introduction" target="_blank">docs.coingecko.com</a></p>
          <p><strong>Формат:</strong> JSON</p>
          <p><strong>Бесплатно:</strong> Да, без ключа (10-30 запросов/мин)</p>
          <p><strong>Эндпоинт:</strong> <code>GET https://api.coingecko.com/api/v3/simple/price</code></p>
          <h4>Параметры:</h4>
          <ul>
            <li><code>ids</code> — bitcoin, ethereum</li>
            <li><code>vs_currencies</code> — rub</li>
          </ul>
          <h4>Возвращает:</h4>
          <ul>
            <li><code>bitcoin.rub</code> — курс Bitcoin в рублях</li>
            <li><code>ethereum.rub</code> — курс Ethereum в рублях</li>
          </ul>
        </div>
      )
    },
    {
      id: 'weather',
      title: 'Open-Meteo (Погода)',
      content: (
        <div>
          <h3>Open-Meteo API</h3>
          <p><strong>Документация:</strong> <a href="https://open-meteo.com/en/docs" target="_blank">open-meteo.com</a></p>
          <p><strong>Формат:</strong> JSON</p>
          <p><strong>Бесплатно:</strong> Да, без ключа</p>
          <p><strong>Эндпоинт:</strong> <code>GET https://api.open-meteo.com/v1/forecast</code></p>
          <h4>Параметры:</h4>
          <ul>
            <li><code>latitude, longitude</code> — координаты</li>
            <li><code>current</code> — temperature_2m, wind_speed_10m, cloud_cover</li>
          </ul>
        </div>
      )
    },
    {
      id: 'localstorage',
      title: 'LocalStorage',
      content: (
        <div>
          <h3>LocalStorage API (Web Storage)</h3>
          <p><strong>Документация:</strong> <a href="https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage" target="_blank">MDN Web Docs</a></p>
          <p><strong>Тип:</strong> Встроенный API браузера</p>
          <h4>Методы:</h4>
          <ul>
            <li><code>setItem(key, value)</code> — сохранить данные</li>
            <li><code>getItem(key)</code> — получить данные</li>
            <li><code>removeItem(key)</code> — удалить данные</li>
          </ul>
          <p><strong>Используется для:</strong> Сохранение списка задач между сессиями</p>
        </div>
      )
    }
  ];

  return (
    <>
      <button className="docs-button" onClick={() => setOpen(true)}>
        📚 Документация API
      </button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)}>✕</button>
            <h2>Документация API</h2>
            
            <div className="tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {tabs.find(t => t.id === activeTab)?.content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApiDocs;