

const isScrolledIntoView = (el: Element) => {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

const hideCurrentCursor = () => {
    Array.from(document.getElementsByClassName("InteractiveCursor")).forEach(
        cursor => {

            if ( isScrolledIntoView(cursor) ) {
                // @ts-ignore
                cursor.style.setProperty('--opacity', 0.0)
                return;
            }

        }
    )
    
}

const showCurrentCursor = () => {
    Array.from(document.getElementsByClassName("InteractiveCursor")).forEach(
        cursor => {

            if ( isScrolledIntoView(cursor) ) {
                // @ts-ignore
                cursor.style.setProperty('--opacity', 1.0)
                return;
            }

        }
    )
    
}

export {
    isScrolledIntoView,
    hideCurrentCursor, 
    showCurrentCursor
}