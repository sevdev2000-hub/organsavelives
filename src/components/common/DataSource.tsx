import React from 'react';
import { ExternalLink } from 'lucide-react';

interface DataSourceProps {
    source: {
        name: string;
        url: string;
        description: string;
    };
    className?: string;
}

const DataSource: React.FC<DataSourceProps> = ({ source, className = "" }) => (
    <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-700 transition-colors ${className}`}
        title={source.description}
    >
        <span>Source: {source.name}</span>
        <ExternalLink className="w-3 h-3" />
    </a>
);

export default DataSource;