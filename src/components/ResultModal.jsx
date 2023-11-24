import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const ResultModal = forwardRef(function ResultModal({ onReset, targetTime ,remainingTime }, ref) {
    const dialog = useRef();

    let userLost = remainingTime <= 0;
    let formattedTime = (remainingTime /1000).toFixed(2);
    let score = Math.round((1-remainingTime / (targetTime*1000)) *100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(<dialog ref={dialog} className='result-modal'>

        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your Score:{score}</h2> }

        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formattedTime} seconds left</strong></p>
        <form method="dialog" onSubmit={onReset} onClose={onReset}>
            <button>Close</button>
        </form>
    </dialog>
    ,document.getElementById('modal')
    )

});

export default ResultModal;