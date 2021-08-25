import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
            className="journal__entry-picture"
            style={{
                backgroundSize:'cover',
                backgroundImage:'url(https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg)',
                backgroundPosition:'right',
            }}
            >

            </div>
        <div className="journal__entry-body">
            <p className="journal__entry-title">
                UN NUEVO DIA
            </p>
            <p className="journal__entry-content">
                lorem ipsum dolor sit amet, consectetur m ipsum dolor sit amet, consectetu.
            </p>
        </div>
        <div className="journal__entry-date-box">
            <span>
                Monday
            </span>
            <h4>
                28
            </h4>
        </div>
        
        </div>
    )
}
