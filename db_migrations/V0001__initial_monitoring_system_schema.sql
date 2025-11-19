-- Создание таблиц для системы мониторинга экологической обстановки

-- Таблица датчиков качества воздуха
CREATE TABLE air_quality_sensors (
    id SERIAL PRIMARY KEY,
    sensor_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    status VARCHAR(50) DEFAULT 'active',
    installed_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_maintenance TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица показателей качества воздуха
CREATE TABLE air_quality_metrics (
    id SERIAL PRIMARY KEY,
    sensor_id INTEGER REFERENCES air_quality_sensors(id),
    pm25 DECIMAL(8, 2),
    pm10 DECIMAL(8, 2),
    co2 DECIMAL(8, 2),
    temperature DECIMAL(5, 2),
    humidity DECIMAL(5, 2),
    pressure DECIMAL(8, 2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица отчётов о загрязнениях
CREATE TABLE pollution_reports (
    id SERIAL PRIMARY KEY,
    report_type VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    description TEXT,
    severity VARCHAR(50),
    status VARCHAR(50) DEFAULT 'pending',
    reported_by VARCHAR(255),
    reported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица состояния дорог
CREATE TABLE road_conditions (
    id SERIAL PRIMARY KEY,
    road_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    condition_type VARCHAR(100),
    severity VARCHAR(50),
    description TEXT,
    status VARCHAR(50) DEFAULT 'open',
    reported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fixed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица мусорных контейнеров
CREATE TABLE waste_bins (
    id SERIAL PRIMARY KEY,
    bin_number VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    capacity INTEGER,
    current_level INTEGER,
    status VARCHAR(50) DEFAULT 'normal',
    last_emptied TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица показателей шума
CREATE TABLE noise_metrics (
    id SERIAL PRIMARY KEY,
    location VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    noise_level DECIMAL(5, 2),
    measurement_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица документации проекта
CREATE TABLE project_documents (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    document_type VARCHAR(100),
    content TEXT,
    file_url VARCHAR(500),
    version VARCHAR(50),
    author VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица пользователей системы
CREATE TABLE system_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'viewer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- Индексы для оптимизации запросов
CREATE INDEX idx_air_quality_timestamp ON air_quality_metrics(timestamp);
CREATE INDEX idx_pollution_status ON pollution_reports(status);
CREATE INDEX idx_road_status ON road_conditions(status);
CREATE INDEX idx_waste_bins_status ON waste_bins(status);
CREATE INDEX idx_noise_time ON noise_metrics(measurement_time);

-- Комментарии к таблицам
COMMENT ON TABLE air_quality_sensors IS 'Датчики мониторинга качества воздуха';
COMMENT ON TABLE air_quality_metrics IS 'Показатели качества воздуха с датчиков';
COMMENT ON TABLE pollution_reports IS 'Отчёты о загрязнениях и проблемах';
COMMENT ON TABLE road_conditions IS 'Состояние дорог и дорожного покрытия';
COMMENT ON TABLE waste_bins IS 'Мусорные контейнеры и их состояние';
COMMENT ON TABLE noise_metrics IS 'Показатели уровня шума';
COMMENT ON TABLE project_documents IS 'Документация и техническое задание проекта';
COMMENT ON TABLE system_users IS 'Пользователи системы мониторинга';