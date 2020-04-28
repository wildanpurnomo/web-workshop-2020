const db = firebase.firestore();

// offline data
db.enablePersistence()
    .catch(err => {
        if (error.code === 'failed-precondition') {
            console.log('multiple tabs opened');
        } else if (error.code == 'unimplemented') {
            console.log('browser not support');
        }
    });

// realtime listener
db.collection("movies").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        console.log(change);
        if (change.type === 'added') {
            // updateList
            renderNewData(change.doc.data(), change.doc.id);
        } else if (change.type === 'removed') {
            // deleteList
            deleteData(change.doc.id);
        }
    })
});

// adding data
const modalForm = document.querySelector('form');
modalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let movieData = {
        title: modalForm.modalInputTitle.value,
        description: modalForm.modalInputDesc.value,
        genre: modalForm.modalInputGenre.value,
        imageURL: modalForm.modalInputURL.value,
    };

    db.collection("movies").add(movieData)
        .catch((err) => {
            console.log(err);
        });
    
    $('#formAdd').modal('hide');
});

// removing stuff
moviesContainer.addEventListener('click', (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName === 'A') {
        const dataId = event.target.getAttribute('data-id');
        db.collection("movies").doc(dataId).delete();
    }
});

