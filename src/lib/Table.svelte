<script>
    import { onMount } from 'svelte';
    // export let animals;
    export let tenants = []
    const tenants_service_url = `${import.meta.env.VITE_TENANT_SERVICE}`
    

    // console.log(animals)

    async function handleClick(name){
        alert('Are you sure you want to delete the tenant: ' + name +'?')
        let response = await fetch(tenants_service_url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                name
            }
        })
        console.log(name)
    }

</script>


<h1>Tenants</h1>
<table>
    <thead>
        <tr>
            {#each Object.keys(tenants[0]) as header}
            <th>{header}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each Object.values(tenants) as row}
        <tr on:click="{handleClick(row.name)}">
            {#each Object.values(row) as cell}
            <td>{cell}</td>
            {/each}
        </tr>
        {/each}
    </tbody>
</table>

<style>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

 td, th {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2;}

tr:hover {background-color: rgb(255, 0, 0);}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #e9ac5c;
  background-color: #ff3e00;
  color: white;
}
</style>