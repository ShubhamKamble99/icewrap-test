import { useState, useEffect } from 'react';
import DialogWindow from './Components/DialogWindow';
import './index.css';
import { FiEye, FiEdit, FiAlertCircle, FiSpeaker } from 'react-icons/fi';
import Button from './Components/Button';
import TextArea from './Components/TextArea';
import StoredDataList from './Components/StoredDataList';

export default function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [text, setText] = useState('');
  const [savedData, setSavedData] = useState([]);
  const [variation, setVariation] = useState(null);
  const [textError, setTextError] = useState('');
  const [showStoredData, setShowStoredData] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('dialogData')) || [];
    setSavedData(stored);
  }, []);

  const handleSave = () => {
    if (textError || text.length === 0 || text.length > 300) return;

    const updated = [...savedData, text];
    localStorage.setItem('dialogData', JSON.stringify(updated));
    setSavedData(updated);
    setShowDialog(false);
    setText('');
    setTextError('');
  };

  const handleGetStoredData = () => {
    if (!showDialog) {
      setShowStoredData(!showStoredData);
    }
  };


  const openEditableDialog = () => {
    setShowStoredData(false);
    setVariation('editable');
    setShowDialog(true);
  };

  const openAnnouncementDialog = () => {
    setShowStoredData(false);
    setVariation('variation2');
    setShowDialog(true);
  };

  const buttonVariations = [
    { label: 'Open Editable Dialog', icon: <FiEdit />, action: openEditableDialog },
    { label: 'Show Announcement', icon: <FiAlertCircle />, action: openAnnouncementDialog },
    { label: 'Show Stored Data', icon: <FiEye />, action: handleGetStoredData },
  ];

  const getDialogProps = () => {
    switch (variation) {
      case 'editable':
        return {
          header: {
            icon: <FiEdit />,
            title: 'Editable Dialog',
            buttons: [
              { label: 'Close', onClick: () => setShowDialog(false), className: 'close' },
            ],
          },
          content: (
            <TextArea
              value={text}
              onChange={setText}
              setError={setTextError}
            />
          ),
          footer: {
            info: 'All changes will be stored in your browser.',
            buttons: [
              { label: 'Cancel', onClick: () => setShowDialog(false), className: 'cancel' },
              {
                label: 'Save',
                onClick: handleSave,
                className: 'save',
                disabled: text.length === 0 || text.length > 300,
              },
            ],
          },
        };
      case 'variation2':
        return {
          header: {
            icon: <FiSpeaker />,
            title: 'Announcement',
            buttons: [
              { label: 'Close', onClick: () => setShowDialog(false), className: 'close' },
            ],
          },
          content: 'System maintenance scheduled for Sunday.',
          footer: {
            info: '',
            buttons: [],
          },
        };
      default:
        return {};
    }
  };

  return (
    <>
      <div className={`mainContent ${showDialog ? 'blur-background' : ''}`}>
        <div className="buttonvariations">
          {buttonVariations.map((btn, i) => (
            <Button
              key={i}
              onClick={btn.action}
              icon={btn.icon}
              label={btn.label}
              className={btn.className}
            />
          ))}
        </div>

        {showStoredData && (
          <StoredDataList
            data={savedData}
            onClear={() => {
              localStorage.removeItem('dialogData');
              setSavedData([]);
            }}
          />
        )}

      </div>
      {showDialog && <DialogWindow show={showDialog} {...getDialogProps()} />}

    </>
  );
}
