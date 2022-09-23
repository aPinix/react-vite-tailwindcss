import React, { useEffect, useState } from 'react';

interface Props {
  title: string;
  description?: string;
  cls?: string;
}

function CustomFunctionalComponent(props: Props) {
  const componentType = 'Functional Component';

  const { title, description, cls } = props;
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    setMessage('Hello!');
  });

  return (
    <>
      <div className="flex flex-col gap-3 rounded-xl p-6 text-slate-500 shadow-xl">
        <div className={`flex gap-2 text-xl font-bold ${cls}`}>
          <span>{componentType}</span>
          <span>{cls ? '(cls)' : ''}</span>
        </div>
        <hr />
        {message && (
          <div className="flex gap-2">
            <span className="font-bold">State "message":</span>
            <span>{message}</span>
          </div>
        )}
        {title && (
          <div className="flex gap-2">
            <span className="font-bold">Props "title":</span>
            <span>{title}</span>
          </div>
        )}
        {description && (
          <div className="flex gap-2">
            <span className="font-bold">Props "description":</span>
            <span>{description}</span>
          </div>
        )}
        {!description && (
          <div className="flex gap-2">
            <span className="text-slate-400 line-through">No description</span>
          </div>
        )}
      </div>
    </>
  );
}

export default CustomFunctionalComponent;
