<script lang="ts">
import ContactCard from './ContactCard.svelte';
import type { Contact } from './Types';

let name = 'Max';
let title = '';
let image = '';
let description = '';
let age = 30;
let done = false;
let formState = 'empty';
let createdContacts: Contact[] = [];

// let uppercaseName; not required!

$: uppercaseName = name.toUpperCase();

// eslint-disable-next-line no-undef
$: console.log(name);

$: if (name === 'Maximilian') {
    console.log('It runs!');
    age = 31;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function incrementAge() {
    age += 1;
}

function changeName() {
    name = 'Maximilian';
}

// function nameInput(event:any) {
//     const enteredValue = event.target.value;
//     name = enteredValue;
// }

function addContact() {
    if (
        name.trim().length === 0 ||
        title.trim().length === 0 ||
        image.trim().length === 0 ||
        description.trim().length === 0
    ) {
        formState = 'invalid';
        return;
    }
    createdContacts = [
        ...createdContacts,
        {
            id: Math.random(),
            name: name,
            jobTitle: title,
            desc: description,
            imageUrl: image,
        },
    ];
    formState = 'done';
}

function deleteFirst() {
    createdContacts = createdContacts.slice(1);
}

function deleteLast() {
    createdContacts = createdContacts.slice(0, -1);
}
</script>

<h1>Hello {uppercaseName}!</h1>
<!--<button on:click="{incrementAge}">Change Age</button>-->
<!-- <button on:click="{changeName}">Change Name</button> -->
<!-- <input type="text" value={name} on:input={nameInput} /> -->
<form id="form">
    <div class="form-control">
        <label for="name">Name</label>
        <input bind:value="{name}" id="name" type="text" />
    </div>

    <div class="form-control">
        <label for="title">Title</label>
        <input bind:value="{title}" id="title" type="text" />
    </div>

    <div class="form-control">
        <label for="image">Image</label>
        <input bind:value="{image}" id="image" type="text" />
    </div>

    <div class="form-control">
        <label for="desc">Description</label>
        <textarea bind:value="{description}" id="desc" rows="3"></textarea>
    </div>
    <button on:click="{addContact}" type="submit">Add Contact Card</button>
</form>

<button on:click="{deleteFirst}">Delete First</button>
<button on:click="{deleteLast}">Delete Last</button>

{#if formState === 'invalid'}
    <p>Invalid input</p>
{:else}
    <p>Please enter some data and hit the button!</p>
{/if}

{#each createdContacts as contact, idx (contact.id)}
    <h2>{idx + 1}</h2>
    <ContactCard
        description="{contact.desc}"
        jobTitle="{contact.jobTitle}"
        userImage="{contact.imageUrl}"
        userName="{contact.name}" />
{:else}
    <p>Please start adding some content</p>
{/each}

<style>
h1 {
    color: purple;
}

#form {
    width: 30rem;
    max-width: 100%;
    margin: 1rem 0;
}
</style>
